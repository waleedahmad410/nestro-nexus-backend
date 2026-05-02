// src/modules/roles/entities/role.entity.ts

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


export enum RoleStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ tableName: 'roles' })
export class Role {
  [OptionalProps]?: 'id' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Property({ type: 'string', length: 120 })
  name!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  code!: string;

  @Index()
  @Property({ type: 'string', length: 50 })
  scope!: string;

  @Property({ type: 'string', length: 255, nullable: true })
  description?: string;

  @Index()
  @Property({ type: 'string', length: 20, default: RoleStatus.ACTIVE })
  status = RoleStatus.ACTIVE;

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
