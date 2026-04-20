// src/modules/unit-conversions/unit-conversions.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UnitConversion } from './entities/unit-conversion.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UnitConversion])],
  exports: [MikroOrmModule],
})
export class UnitConversionsModule {}
