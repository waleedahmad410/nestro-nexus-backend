// src/modules/unit-conversions/entities/unit-conversion.entity.ts

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

import { UnitOfMeasure } from '../../units-of-measure/entities/unit-of-measure.entity';

@Entity({ tableName: 'unit_conversions' })
export class UnitConversion {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => UnitOfMeasure, { fieldName: 'from_unit_id' })
  fromUnit!: Rel<UnitOfMeasure>;

  @Index()
  @ManyToOne(() => UnitOfMeasure, { fieldName: 'to_unit_id' })
  toUnit!: Rel<UnitOfMeasure>;

  @Property({ type: 'decimal', precision: 18, scale: 6 })
  multiplier!: string;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
