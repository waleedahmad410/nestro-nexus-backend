// src/modules/guardians/guardians.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Guardian } from './entities/guardian.entity';
import { StudentGuardian } from './entities/student-guardian.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Guardian, StudentGuardian])],
  exports: [MikroOrmModule],
})
export class GuardiansModule {}
