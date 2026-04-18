// src/modules/brands/entities/brand.entity.ts

import {
  Entity,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { randomUUID } from 'crypto';

@Entity({ tableName: 'brands' })
export class Brand {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Property({ type: 'string', length: 160, unique: true })
  slug!: string;

  @Property({ type: 'boolean', default: true })
  isActive = true;

  @Property({ type: 'Date' })
  createdAt = new Date();

  @Property({ type: 'Date', onUpdate: () => new Date() })
  updatedAt = new Date();
}