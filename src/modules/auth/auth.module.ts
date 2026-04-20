// src/modules/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserSession } from './entities/user-session.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserSession])],
  exports: [MikroOrmModule],
})
export class AuthModule {}
