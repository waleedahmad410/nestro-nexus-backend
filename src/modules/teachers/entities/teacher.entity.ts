// src/modules/teachers/entities/teacher.entity.ts

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

@Entity({ tableName: 'teachers' })
export class Teacher {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

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

  @Index()
  @Property({ type: 'string', length: 50 })
  employeeNumber!: string;

  @Property({ type: 'string', length: 255, nullable: true })
  qualification?: string;

  @Property({ type: 'string', length: 120, nullable: true })
  specialization?: string;

  @Property({ type: 'Date' })
  joiningDate!: Date;

  @Index()
  @Property({ type: 'string', length: 30 })
  status!: string;

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
