// src/modules/schools/schools.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { School } from './entities/school.entity';
import { SchoolSetting } from './entities/school-setting.entity';

@Module({
  imports: [MikroOrmModule.forFeature([School, SchoolSetting])],
  exports: [MikroOrmModule],
})
export class SchoolsModule {}
