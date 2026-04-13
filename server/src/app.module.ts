import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'
import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';

import * as path from 'path'

import appConfig from '@config/app.config'
import dbConfig from '@config/db.config'
import mailConfig from '@config/mail.config'
import serverConfig from '@config/server.config'
import { DataSourceOptions } from 'typeorm'
import { MailModule } from '@mail/mail.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../public'),
      serveRoot: '/static'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, mailConfig, serverConfig],
      envFilePath: path.join(process.cwd(), '../.env')
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get<DataSourceOptions>('database')
        if (!dbConfig) throw new Error('La configuration "database" est introuvable.')
        return dbConfig
      }
    }),
    AuthModule,
    UserModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
