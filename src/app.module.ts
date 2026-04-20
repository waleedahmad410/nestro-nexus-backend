import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { validate, EnvironmentVariables } from './config/env.validation';
import { createMikroOrmConfig } from './config/mikro-orm.config';
import { Modules } from './modules/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),

    MikroOrmModule.forRootAsync({
      driver: PostgreSqlDriver,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables, true>) =>
        createMikroOrmConfig(configService),
    }),

    Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
