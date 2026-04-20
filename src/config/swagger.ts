import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { EnvironmentVariables } from './env.validation';


export function parseCorsOrigins(corsOrigins: string): string[] {
  return corsOrigins
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function getCorsOptions(
  configService: ConfigService<EnvironmentVariables, true>,
) {
  const corsOrigins = parseCorsOrigins(
    configService.getOrThrow<string>('CORS_ORIGINS'),
  );

  return {
    origin: corsOrigins.includes('*') ? '*' : corsOrigins,
    credentials: !corsOrigins.includes('*'),
  } as const;
}

export function setupSwagger(app: INestApplication, apiPrefix: string): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Restro Nexus API')
    .setDescription('Backend API for Restro Nexus')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  const route = `${apiPrefix}/docs`;

  SwaggerModule.setup(route, app, document);
}
