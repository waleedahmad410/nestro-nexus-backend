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

import { Brand } from '../../brands/entities/brand.entity';

export enum BranchStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ tableName: 'branches' })
export class Branch {
  [OptionalProps]?: 'id' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Brand, { fieldName: 'brand_id' })
  brand!: Rel<Brand>;

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Property({ type: 'string', length: 160, nullable: true })
  email?: string;

  @Property({ type: 'string', length: 40, nullable: true })
  phone?: string;

  @Property({ type: 'string', length: 180, fieldName: 'address_line_1' })
  addressLine1!: string;

  @Property({
    type: 'string',
    length: 180,
    nullable: true,
    fieldName: 'address_line_2',
  })
  addressLine2?: string;

  @Property({ type: 'string', length: 100 })
  city!: string;

  @Property({ type: 'string', length: 100, nullable: true })
  state?: string;

  @Property({ type: 'string', length: 100 })
  country!: string;

  @Property({ type: 'string', length: 20, nullable: true })
  postalCode?: string;

  @Property({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  latitude?: string;

  @Property({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  longitude?: string;

  @Property({ type: 'string', length: 80 })
  timezone!: string;

  @Index()
  @Property({ type: 'string', length: 20, default: BranchStatus.ACTIVE })
  status = BranchStatus.ACTIVE;

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
