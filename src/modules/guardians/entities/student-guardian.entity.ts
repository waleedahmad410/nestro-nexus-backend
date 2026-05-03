// src/modules/guardians/entities/student-guardian.entity.ts

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

import { Student } from '../../students/entities/student.entity';
import { Guardian } from './guardian.entity';

@Entity({ tableName: 'student_guardians' })
export class StudentGuardian {
  [OptionalProps]?:
    | 'id'
    | 'isPrimaryGuardian'
    | 'isEmergencyContact'
    | 'canPickupStudent'
    | 'createdAt'
    | 'updatedAt';

  @PrimaryKey({ type: 'uuid' })
  id: string = uuid();

  @Index()
  @ManyToOne(() => Student, { fieldName: 'student_id' })
  student!: Rel<Student>;

  @Index()
  @ManyToOne(() => Guardian, { fieldName: 'guardian_id' })
  guardian!: Rel<Guardian>;

  @Index()
  @Property({ type: 'string', length: 50 })
  relationType!: string;

  @Property({ type: 'boolean', default: false })
  isPrimaryGuardian = false;

  @Property({ type: 'boolean', default: false })
  isEmergencyContact = false;

  @Property({ type: 'boolean', default: false })
  canPickupStudent = false;

  @Property({ type: 'Date', onCreate: () => new Date() })
  createdAt = new Date();

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();
}
