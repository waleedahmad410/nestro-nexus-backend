// src/config/env.validation.ts

import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  validateSync,
} from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsString()
  @IsNotEmpty()
  APP_NAME!: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  APP_PORT!: number;

  @IsString()
  @IsNotEmpty()
  API_PREFIX!: string;

  @IsString()
  @IsNotEmpty()
  DB_HOST!: string;

  @IsInt()
  @Min(1)
  @Max(65535)
  DB_PORT!: number;

  @IsString()
  @IsNotEmpty()
  DB_USER!: string;

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD!: string;

  @IsString()
  @IsNotEmpty()
  DB_NAME!: string;

  @IsString()
  @IsNotEmpty()
  JWT_ACCESS_SECRET!: string;

  @IsString()
  @IsNotEmpty()
  JWT_REFRESH_SECRET!: string;

  @IsString()
  @IsNotEmpty()
  JWT_ACCESS_EXPIRES_IN!: string;

  @IsString()
  @IsNotEmpty()
  JWT_REFRESH_EXPIRES_IN!: string;
}

export function validate(
  config: Record<string, unknown>,
): EnvironmentVariables {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    {
      NODE_ENV: config.NODE_ENV ?? Environment.Development,

      APP_NAME: config.APP_NAME ?? 'Nestro Nexus Backend',
      APP_PORT: Number(config.APP_PORT ?? 3000),
      API_PREFIX: config.API_PREFIX ?? 'api',

      DB_HOST: config.DB_HOST ?? 'localhost',
      DB_PORT: Number(config.DB_PORT ?? 5432),
      DB_USER: config.DB_USER ?? 'postgres',
      DB_PASSWORD: config.DB_PASSWORD ?? 'postgres',
      DB_NAME: config.DB_NAME ?? 'nestro_nexus',

      JWT_ACCESS_SECRET:
        config.JWT_ACCESS_SECRET ?? 'change_this_access_secret',
      JWT_REFRESH_SECRET:
        config.JWT_REFRESH_SECRET ?? 'change_this_refresh_secret',
      JWT_ACCESS_EXPIRES_IN: config.JWT_ACCESS_EXPIRES_IN ?? '15m',
      JWT_REFRESH_EXPIRES_IN: config.JWT_REFRESH_EXPIRES_IN ?? '7d',
    },
    {
      enableImplicitConversion: true,
    },
  );

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}