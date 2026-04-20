// src/modules/units-of-measure/units-of-measure.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UnitOfMeasure } from './entities/unit-of-measure.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UnitOfMeasure])],
  exports: [MikroOrmModule],
})
export class UnitsOfMeasureModule {}
