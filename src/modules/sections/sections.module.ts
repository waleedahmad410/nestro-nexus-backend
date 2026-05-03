// src/modules/sections/sections.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Section } from './entities/section.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Section])],
  exports: [MikroOrmModule],
})
export class SectionsModule {}
