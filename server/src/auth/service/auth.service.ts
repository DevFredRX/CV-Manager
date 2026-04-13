import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import * as argon2 from 'argon2'

import { User } from '@user/entity/user.entity';
import { RegisterDTO } from '@auth/dto/register.dto';
import { LoginDTO } from '@auth/dto/login.dto';
import { MailService } from '@mail/service/mail.service';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService
    ) {}

    async register(registerDTO: RegisterDTO): Promise<User> {
        
        const existingUser = await this.userRepository.findOne({ where: [{ email: registerDTO.email }, { username: registerDTO.username }]})
        if (existingUser) throw new ConflictException('Utilisateur ou email déjà existant')
        
        const hashedPassword = await argon2.hash(registerDTO.password)
        const activationToken = this.jwtService.sign({ email: registerDTO.email, sub: 'account_activation' })

        const newUser = this.userRepository.create({ ...registerDTO, hashedPassword, activationToken, isActive: false })
        const savedUSer = await this.userRepository.save(newUser)

        await this.mailService.sendActivationEmail(savedUSer, activationToken)
        return savedUSer

    }
    
    async activateUser(token: string): Promise<{ message: string}> {

        try {
            const payload = await this.jwtService.verifyAsync(token)
            const user = await this.userRepository.findOne({ where: { email: payload.email, activationToken: token } })
            if (!user) throw new BadRequestException("Lien d'activation invalide ou déjà utilisé.")
            user.isActive = true
            user.activationToken = null
            await this.userRepository.save(user)
            return { message: "Votre compte a été activé avec succès. Vous pouvez maintenant vous connecter."}
        } catch (error) {
            if (error instanceof Error && error.name === 'TokenExpiredError') throw new UnauthorizedException("Le lien d'activation a expiré (limite de 5 minutes).")
            throw new BadRequestException("Lien d'activation invalide.")
        }
        
    }

    async login(loginDTO: LoginDTO) {

        const { identifier, password } = loginDTO
        const user = await this.userRepository.findOne({ where: [{ email: identifier}, { username: identifier }] })
        
        if (!user) throw new NotFoundException('Identifiants incorrects')
        if (!user.isActive) throw new ForbiddenException("Veuillez activer votre compte via l'email envoyé")

        const isPasswordMatching = await argon2.verify(user.hashedPassword, password)
        if (!isPasswordMatching) throw new UnauthorizedException('Identifiants incorrects')

        const payload = {
            sub: user.id,
            email: user.email,
            username: user.username
        }

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username
            }
        }
        
    }

}
