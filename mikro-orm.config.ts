import 'dotenv/config';

import { Migrator } from '@mikro-orm/migrations';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';

import { entities } from './src/database/entities';
import { validate } from './src/config/env.validation';

const env = validate(process.env);

export default defineConfig({
  driver: PostgreSqlDriver,

  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  dbName: env.DB_NAME,

  entities,

  metadataProvider: ReflectMetadataProvider,

  extensions: [Migrator],

  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
  },

  debug: env.NODE_ENV !== 'production',
});