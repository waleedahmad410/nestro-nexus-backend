import 'dotenv/config';

import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';

import { entities } from '../database/entities';

export default defineConfig({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'nestro_nexus',

  entities,

  metadataProvider: ReflectMetadataProvider,

  extensions: [Migrator],

  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
  },

  debug: process.env.NODE_ENV !== 'production',
});