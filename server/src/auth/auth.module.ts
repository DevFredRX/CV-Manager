import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '@auth/service/auth.service';
import { AuthController } from '@auth/controller/auth.controller';
import { UserModule } from '@user/user.module';
import { MailModule } from '@mail/mail.module';

@Module({
  imports: [
    UserModule,
    MailModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('server.jwt.secret'),
        signOptions: {
          expiresIn: config.get('server.jwt.expires')
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
