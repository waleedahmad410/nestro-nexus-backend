// src/modules/roles/roles.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Role } from './entities/role.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Role])],
  exports: [MikroOrmModule],
})
export class RolesModule {}
