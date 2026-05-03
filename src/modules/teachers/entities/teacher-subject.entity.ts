// src/modules/teachers/entities/teacher-subject.entity.ts

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
import { Subject } from '../../subjects/entities/subject.entity';
import { Teacher } from './teacher.entity';

@Entity({ tableName: 'teacher_subjects' })
export class TeacherSubject {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Teacher, { fieldName: 'teacher_id' })
  teacher!: Rel<Teacher>;

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

  @Index()
  @ManyToOne(() => Subject, { fieldName: 'subject_id' })
  subject!: Rel<Subject>;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
