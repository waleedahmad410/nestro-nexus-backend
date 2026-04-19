// src/modules/modules.ts

import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [BrandsModule],
})
export class Modules {}
