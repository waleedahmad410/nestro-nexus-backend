// src/modules/users/entities/user-role-assignment.entity.ts

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
import { Role } from '../../roles/entities/role.entity';
import { School } from '../../schools/entities/school.entity';
import { User } from './user.entity';

@Entity({ tableName: 'user_role_assignments' })
export class UserRoleAssignment {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => User, { fieldName: 'user_id' })
  user!: Rel<User>;

  @Index()
  @ManyToOne(() => Role, { fieldName: 'role_id' })
  role!: Rel<Role>;

  @Index()
  @ManyToOne(() => School, { fieldName: 'school_id' })
  school!: Rel<School>;

  @Index()
  @ManyToOne(() => Branch, { fieldName: 'branch_id' })
  branch!: Rel<Branch>;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
