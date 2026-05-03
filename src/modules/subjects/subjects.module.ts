// src/modules/subjects/subjects.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ClassSubject } from './entities/class-subject.entity';
import { Subject } from './entities/subject.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ClassSubject, Subject])],
  exports: [MikroOrmModule],
})
export class SubjectsModule {}
