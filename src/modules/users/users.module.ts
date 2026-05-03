// src/modules/users/users.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserProfile } from './entities/user-profile.entity';
import { UserRoleAssignment } from './entities/user-role-assignment.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User, UserProfile, UserRoleAssignment])],
  exports: [MikroOrmModule],
})
export class UsersModule {}
