// src/modules/roles/entities/role-permission.entity.ts

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

import { Permission } from './permission.entity';
import { Role } from './role.entity';

@Entity({ tableName: 'role_permissions' })
export class RolePermission {
  [OptionalProps]?: 'id' | 'createdAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Role, { fieldName: 'role_id' })
  role!: Rel<Role>;

  @Index()
  @ManyToOne(() => Permission, { fieldName: 'permission_id' })
  permission!: Rel<Permission>;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();
}
