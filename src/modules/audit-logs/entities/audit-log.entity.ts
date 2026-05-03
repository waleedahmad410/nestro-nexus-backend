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

import { Branch } from '../../branches/entities/branch.entity';
import { School } from '../../schools/entities/school.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ tableName: 'audit_logs' })
export class AuditLog {
  [OptionalProps]?: 'id' | 'createdAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Index()
  @ManyToOne(() => Branch, { fieldName: 'branch_id' })
  branch!: Rel<Branch>;

  @Index()
  @ManyToOne(() => User, { fieldName: 'user_id' })
  user!: Rel<User>;

  @Property({ type: 'string', length: 120 })
  moduleName!: string;

  @Index()
  @Property({ type: 'string', length: 120 })
  tableName!: string;

  @Index()
  @Property({ type: 'uuid' })
  recordId!: string;

  @Index()
  @Property({ type: 'string', length: 80 })
  action!: string;

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
