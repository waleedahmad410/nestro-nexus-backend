// src/modules/academic-years/academic-years.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AcademicYear } from './entities/academic-year.entity';

@Module({
  imports: [MikroOrmModule.forFeature([AcademicYear])],
  exports: [MikroOrmModule],
})
export class AcademicYearsModule {}
