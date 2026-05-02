// src/modules/audit-logs/audit-logs.module.ts

import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AuditLog } from './entities/audit-log.entity';

@Module({
  imports: [MikroOrmModule.forFeature([AuditLog])],
  exports: [MikroOrmModule],
})
export class AuditLogsModule {}
