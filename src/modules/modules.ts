// src/modules/modules.ts

import { Module } from '@nestjs/common';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { AuthModule } from './auth/auth.module';
import { BranchesModule } from './branches/branches.module';
import { BrandsModule } from './brands/brands.module';
import { RolesModule } from './roles/roles.module';
import { StockLocationsModule } from './stock-locations/stock-locations.module';
import { UnitConversionsModule } from './unit-conversions/unit-conversions.module';
import { UnitsOfMeasureModule } from './units-of-measure/units-of-measure.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BrandsModule,
    BranchesModule,
    RolesModule,
    UsersModule,
    StockLocationsModule,
    UnitsOfMeasureModule,
    UnitConversionsModule,
    AuditLogsModule,
    AuthModule,
  ],
})
export class Modules {}
