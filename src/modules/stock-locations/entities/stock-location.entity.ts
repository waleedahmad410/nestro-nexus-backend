// src/modules/stock-locations/entities/stock-location.entity.ts

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
import { Brand } from '../../brands/entities/brand.entity';

export enum StockLocationStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ tableName: 'stock_locations' })
export class StockLocation {
  [OptionalProps]?: 'id' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Brand, { fieldName: 'brand_id' })
  brand!: Rel<Brand>;

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
  type!: string;

  @Index()
  @Property({ type: 'string', length: 20, default: StockLocationStatus.ACTIVE })
  status = StockLocationStatus.ACTIVE;

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
