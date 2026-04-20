// src/modules/brands/entities/brand.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import {
  Entity,
  Index,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

@Entity({ tableName: 'brands' })
export class Brand {
  [OptionalProps]?: 'id' | 'isActive' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 160, unique: true })
  slug!: string;

  @Index()
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
