// src/modules/branches/branches.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Branch } from './entities/branch.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Branch])],
  exports: [MikroOrmModule],
})
export class BranchesModule {}
