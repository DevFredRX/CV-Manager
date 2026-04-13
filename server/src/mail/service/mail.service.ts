import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { User } from '@user/entity/user.entity'

import * as nodemailer from 'nodemailer'
import * as path from 'path'
import * as fs from 'fs'

@Injectable()
export class MailService {

    private transporter: nodemailer.Transporter

    constructor(private readonly configService: ConfigService) {

        this.transporter = nodemailer.createTransport({
            host: this.configService.get('mail.host'),
            port: this.configService.get('mail.port'),
            secure: false,
            auth: {
                user: this.configService.get('mail.user'),
                pass: this.configService.get('mail.pass')
            }
        })

    }

    async sendActivationEmail(user: User, token: string) {

        const backendURL = this.configService.get('app.backend')
        const logoURL = this.configService.get('server.logo')
        const copyURL = this.configService.get('server.copy')
        const tokenEXP = this.configService.get('server.jwt.expires')
        const tokenURL = `${backendURL}/auth/activate?token=${token}`

        const templatePath = path.join(__dirname, '..', 'template', 'activation.html')
        let htmlContent = fs.readFileSync(templatePath, 'utf8')

        const variables = {
            subject: 'Activation de votre compte CV Manager',
            firstname: user.firstname,
            tokenEXP: tokenEXP,
            activationURL: tokenURL,
            tokenURL: tokenURL,
            logoURL: logoURL,
            copyURL: copyURL
        }

        Object.entries(variables).forEach(([key, value]) => {
            const placeholder = new RegExp(`{{ ${key} }}`, 'g')
            htmlContent = htmlContent.replace(placeholder, value)
        })

        await this.transporter.sendMail({
            from: `"CV Manager" <${this.configService.get('mail.from')}>`,
            to: user.email,
            subject: variables.subject,
            html: htmlContent,
            attachments: [
                {
                    filename: 'cv-manager.png',
                    path: path.join(process.cwd(), 'public', 'cv-manager.png'),
                    cid: 'app-logo'
                },
                {
                    filename: 'content-copy',
                    path: path.join(process.cwd(), 'public', 'content-copy.png'),
                    cid: 'content-copy'
                }
            ]
        })

    }

}
