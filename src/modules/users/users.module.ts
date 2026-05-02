// src/modules/users/users.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserRoleAssignment } from './entities/user-role-assignment.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User, UserRoleAssignment])],
  exports: [MikroOrmModule],
})
export class UsersModule {}
