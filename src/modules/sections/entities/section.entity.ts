// src/modules/sections/entities/section.entity.ts

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

import { Branch } from '../../branches/entities/branch.entity';
import { SchoolClass } from '../../classes/entities/school-class.entity';
import { School } from '../../schools/entities/school.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Entity({ tableName: 'sections' })
export class Section {
  [OptionalProps]?:
    | 'id'
    | 'capacity'
    | 'classTeacher'
    | 'isActive'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Index()
  @ManyToOne(() => Branch, { fieldName: 'branch_id' })
  branch!: Rel<Branch>;

  @Index()
  @ManyToOne(() => SchoolClass, { fieldName: 'class_id' })
  schoolClass!: Rel<SchoolClass>;

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Property({ type: 'integer', nullable: true })
  capacity?: number;

  @Index()
  @ManyToOne(() => Teacher, {
    fieldName: 'class_teacher_id',
    nullable: true,
  })
  classTeacher?: Rel<Teacher>;

  @Property({ type: 'boolean', default: true })
  isActive = true;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();

  @Property({ type: 'Date', nullable: true })
  deletedAt?: Date;
}
