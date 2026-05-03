// src/modules/academic-years/entities/academic-year.entity.ts

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

import { School } from '../../schools/entities/school.entity';

@Entity({ tableName: 'academic_years' })
export class AcademicYear {
  [OptionalProps]?:
    | 'id'
    | 'isActive'
    | 'isLocked'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Property({ type: 'Date' })
  startDate!: Date;

  @Property({ type: 'Date' })
  endDate!: Date;

  @Property({ type: 'boolean', default: true })
  isActive = true;

  @Property({ type: 'boolean', default: false })
  isLocked = false;

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
