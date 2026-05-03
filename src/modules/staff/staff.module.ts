// src/modules/staff/staff.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Staff } from './entities/staff.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Staff])],
  exports: [MikroOrmModule],
})
export class StaffModule {}
