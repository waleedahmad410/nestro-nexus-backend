import { Migrator } from '@mikro-orm/migrations';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';

import { entities } from '../database/entities';
import { EnvironmentVariables } from './env.validation';

export const createMikroOrmConfig = (
  configService: ConfigService<EnvironmentVariables, true>,
) =>
  defineConfig({
    driver: PostgreSqlDriver,

    host: configService.getOrThrow<string>('DB_HOST'),
    port: configService.getOrThrow<number>('DB_PORT'),
    user: configService.getOrThrow<string>('DB_USER'),
    password: configService.getOrThrow<string>('DB_PASSWORD'),
    dbName: configService.getOrThrow<string>('DB_NAME'),

    entities,

    metadataProvider: ReflectMetadataProvider,

    extensions: [Migrator],

    migrations: {
      path: './dist/database/migrations',
      pathTs: './src/database/migrations',
    },

    debug: configService.getOrThrow<string>('NODE_ENV') !== 'production',
  });
