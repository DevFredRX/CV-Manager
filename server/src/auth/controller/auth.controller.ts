import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common'

import { AuthService } from '../service/auth.service'
import { RegisterDTO } from '../dto/register.dto'
import { LoginDTO } from '../dto/login.dto'

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async register(@Body() registerDTO: RegisterDTO) {
        
        const user = await this.authService.register(registerDTO)
        return {
            message: "Inscription réussie. Veuillez vérifier vos mails.",
            user: user
        }

    }

    @Get('activate')
    async activate(@Query('token') token: string, @Res() res) {
        await this.authService.activateUser(token)
        return res.redirect('https://localhost:5173/activation')
    }

    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        return this.authService.login(loginDTO)
    }
    
}
