// src/modules/users/entities/user.entity.ts

import { OptionalProps } from '@mikro-orm/core';
import {
  Entity,
  Index,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { v4 as uuid } from 'uuid';

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ tableName: 'users' })
export class User {
  [OptionalProps]?:
    | 'id'
    | 'status'
    | 'lastLoginAt'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Property({ type: 'string', length: 120 })
  fullName!: string;

  @Index()
  @Property({ type: 'string', length: 160 })
  email!: string;

  @Property({ type: 'string', length: 40, nullable: true })
  phone?: string;

  @Property({ type: 'string', length: 255 })
  passwordHash!: string;

  @Index()
  @Property({ type: 'string', length: 20, default: UserStatus.ACTIVE })
  status = UserStatus.ACTIVE;

  @Property({ type: 'Date', nullable: true })
  lastLoginAt?: Date;

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
