// src/modules/auth/entities/password-reset-token.entity.ts

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

@Entity({ tableName: 'password_reset_tokens' })
export class PasswordResetToken {
  [OptionalProps]?: 'id' | 'usedAt' | 'createdAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => User, { fieldName: 'user_id' })
  user!: Rel<User>;

  @Index()
  @Property({ type: 'string', length: 255 })
  tokenHash!: string;

  @Index()
  @Property({ type: 'Date' })
  expiresAt!: Date;

  @Property({ type: 'Date', nullable: true })
  usedAt?: Date;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();
}
