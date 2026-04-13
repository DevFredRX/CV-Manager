import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

import { AppModule } from '@src/app.module';

import * as fs from 'fs'
import * as path from 'path'

async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync(path.join(process.cwd(), 'certificats', 'key.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'certificats', 'cert.pem'))
  }
  
  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  app.enableCors({
    origin: 'https://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })

  await app.listen(process.env.PORT ?? 3000)

}

bootstrap();
