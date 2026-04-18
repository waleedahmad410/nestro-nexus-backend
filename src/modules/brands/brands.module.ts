// src/modules/brands/brands.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Brand } from './entities/brand.entity';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

@Module({
  imports: [MikroOrmModule.forFeature([Brand])],
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
})
export class BrandsModule {}