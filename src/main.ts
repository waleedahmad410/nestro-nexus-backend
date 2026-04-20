import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { EnvironmentVariables } from './config/env.validation';
import { getCorsOptions, setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService =
    app.get<ConfigService<EnvironmentVariables, true>>(ConfigService);
  const port = configService.getOrThrow<number>('APP_PORT');
  const apiPrefix = configService.getOrThrow<string>('API_PREFIX');

  const corsOptions = getCorsOptions(configService);

  app.use(helmet());
  app.enableCors(corsOptions);
  app.setGlobalPrefix(apiPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    }),
  );

  setupSwagger(app, apiPrefix);

  await app.listen(port);
}

void bootstrap();
