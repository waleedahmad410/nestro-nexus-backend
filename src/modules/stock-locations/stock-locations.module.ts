// src/modules/stock-locations/stock-locations.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { StockLocation } from './entities/stock-location.entity';

@Module({
  imports: [MikroOrmModule.forFeature([StockLocation])],
  exports: [MikroOrmModule],
})
export class StockLocationsModule {}
