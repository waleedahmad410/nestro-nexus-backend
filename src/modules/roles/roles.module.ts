// src/modules/roles/roles.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Permission } from './entities/permission.entity';
import { RolePermission } from './entities/role-permission.entity';
import { Role } from './entities/role.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Permission, Role, RolePermission])],
  exports: [MikroOrmModule],
})
export class RolesModule {}
