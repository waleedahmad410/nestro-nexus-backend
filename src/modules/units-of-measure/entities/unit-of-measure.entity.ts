// src/modules/units-of-measure/entities/unit-of-measure.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import {
  Entity,
  Index,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

export enum UnitOfMeasureStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ tableName: 'units_of_measure' })
export class UnitOfMeasure {
  [OptionalProps]?:
    | 'id'
    | 'precisionValue'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  type!: string;

  @Property({ type: 'number', default: 0 })
  precisionValue = 0;

  @Index()
  @Property({ type: 'string', length: 20, default: UnitOfMeasureStatus.ACTIVE })
  status = UnitOfMeasureStatus.ACTIVE;

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
