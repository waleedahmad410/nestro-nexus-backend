// src/modules/students/students.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { StudentEnrollment } from './entities/student-enrollment.entity';
import { Student } from './entities/student.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Student, StudentEnrollment])],
  exports: [MikroOrmModule],
})
export class StudentsModule {}
