// src/modules/schools/entities/school-setting.entity.ts

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

import { School } from './school.entity';

@Entity({ tableName: 'school_settings' })
export class SchoolSetting {
  [OptionalProps]?: 'id' | 'isActive' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Property({ type: 'string', length: 50 })
  timezone!: string;

  @Property({ type: 'string', length: 10 })
  currency!: string;

  @Property({ type: 'string', length: 20 })
  dateFormat!: string;

  @Property({ type: 'string', length: 10 })
  language!: string;

  @Property({ type: 'uuid', nullable: true })
  activeAcademicYearId?: string;

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
}
