// src/modules/classes/entities/school-class.entity.ts

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
import { School } from '../../schools/entities/school.entity';

@Entity({ tableName: 'classes' })
export class SchoolClass {
  [OptionalProps]?:
    | 'id'
    | 'sortOrder'
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

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  level!: string;

  @Property({ type: 'integer', default: 0 })
  sortOrder = 0;

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
