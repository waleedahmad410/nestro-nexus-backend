// src/modules/teachers/teachers.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TeacherSubject } from './entities/teacher-subject.entity';
import { Teacher } from './entities/teacher.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Teacher, TeacherSubject])],
  exports: [MikroOrmModule],
})
export class TeachersModule {}
