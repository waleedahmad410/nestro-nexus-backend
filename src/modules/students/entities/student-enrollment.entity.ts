// src/modules/students/entities/student-enrollment.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import type { Rel } from '@mikro-orm/core';
import {
  Entity,
  Index,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

import { AcademicYear } from '../../academic-years/entities/academic-year.entity';
import { Branch } from '../../branches/entities/branch.entity';
import { SchoolClass } from '../../classes/entities/school-class.entity';
import { School } from '../../schools/entities/school.entity';
import { Section } from '../../sections/entities/section.entity';
import { Student } from './student.entity';

@Entity({ tableName: 'student_enrollments' })
export class StudentEnrollment {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Student, { fieldName: 'student_id' })
  student!: Rel<Student>;

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Index()
  @ManyToOne(() => Branch, { fieldName: 'branch_id' })
  branch!: Rel<Branch>;

  @Index()
  @ManyToOne(() => AcademicYear, { fieldName: 'academic_year_id' })
  academicYear!: Rel<AcademicYear>;

  @Index()
  @ManyToOne(() => SchoolClass, { fieldName: 'class_id' })
  schoolClass!: Rel<SchoolClass>;

  @Index()
  @ManyToOne(() => Section, { fieldName: 'section_id' })
  section!: Rel<Section>;

  @Property({ type: 'string', length: 30, nullable: true })
  rollNumber?: string;

  @Index()
  @Property({ type: 'string', length: 30 })
  enrollmentStatus!: string;

  @Property({ type: 'Date' })
  startDate!: Date;

  @Property({ type: 'Date', nullable: true })
  endDate?: Date;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
