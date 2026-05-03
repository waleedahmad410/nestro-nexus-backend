// src/modules/roles/entities/permission.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import {
  Entity,
  Index,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

@Entity({ tableName: 'permissions' })
export class Permission {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @Property({ type: 'string', length: 80 })
  moduleName!: string;

  @Index()
  @Property({ type: 'string', length: 80 })
  actionName!: string;

  @Index()
  @Property({ type: 'string', length: 120 })
  code!: string;

  @Property({ type: 'string', length: 255, nullable: true })
  description?: string;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
