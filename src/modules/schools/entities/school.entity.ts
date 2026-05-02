// src/modules/schools/entities/school.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import {
  Entity,
  Index,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

@Entity({ tableName: 'schools' })
export class School {
  [OptionalProps]?: 'id' | 'isActive' | 'createdAt' | 'updatedAt' | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Property({ type: 'string', length: 255 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Property({ type: 'string', length: 100, nullable: true })
  registrationNumber?: string;

  @Index()
  @Property({ type: 'string', length: 160 })
  email!: string;

  @Property({ type: 'string', length: 40, nullable: true })
  phone?: string;

  @Property({ type: 'string', length: 255, nullable: true })
  website?: string;

  @Property({ type: 'string', length: 500, nullable: true })
  logoUrl?: string;

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
