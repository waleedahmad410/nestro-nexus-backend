// src/modules/audit-logs/entities/audit-log.entity.ts

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

import { User } from '../../users/entities/user.entity';

@Entity({ tableName: 'audit_logs' })
export class AuditLog {
  [OptionalProps]?: 'id' | 'createdAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => User, { fieldName: 'actor_user_id' })
  actorUser!: Rel<User>;

  @Index()
  @Property({ type: 'string', length: 80 })
  action!: string;

  @Index()
  @Property({ type: 'string', length: 120 })
  entityName!: string;

  @Index()
  @Property({ type: 'uuid' })
  entityId!: string;

  @Property({ type: 'jsonb', nullable: true })
  oldValues?: Record<string, unknown>;

  @Property({ type: 'jsonb', nullable: true })
  newValues?: Record<string, unknown>;

  @Property({ type: 'string', length: 45, nullable: true })
  ipAddress?: string;

  @Property({ type: 'string', length: 255, nullable: true })
  userAgent?: string;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();
}
