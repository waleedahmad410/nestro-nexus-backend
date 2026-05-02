// src/modules/branches/entities/branch.entity.ts

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

@Entity({ tableName: 'branches' })
export class Branch {
  [OptionalProps]?:
    | 'id'
    | 'isMainBranch'
    | 'isActive'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Property({ type: 'string', length: 255 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Index()
  @Property({ type: 'string', length: 160 })
  email!: string;

  @Property({ type: 'string', length: 40, nullable: true })
  phone?: string;

  @Property({ type: 'text', nullable: true })
  address?: string;

  @Property({ type: 'string', length: 100, nullable: true })
  city?: string;

  @Property({ type: 'string', length: 100, nullable: true })
  state?: string;

  @Property({ type: 'string', length: 100, nullable: true })
  country?: string;

  @Property({ type: 'string', length: 20, nullable: true })
  postalCode?: string;

  @Property({ type: 'boolean', default: false })
  isMainBranch = false;

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