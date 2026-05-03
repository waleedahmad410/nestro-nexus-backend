// src/modules/modules.ts

import { Module } from '@nestjs/common';
import { AcademicYearsModule } from './academic-years/academic-years.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { AuthModule } from './auth/auth.module';
import { BranchesModule } from './branches/branches.module';
import { ClassesModule } from './classes/classes.module';
import { GuardiansModule } from './guardians/guardians.module';
//import { BrandsModule } from './brands/brands.module';
import { RolesModule } from './roles/roles.module';
import { SectionsModule } from './sections/sections.module';
import { StaffModule } from './staff/staff.module';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
//import { StockLocationsModule } from './stock-locations/stock-locations.module';
//import { UnitConversionsModule } from './unit-conversions/unit-conversions.module';
//import { UnitsOfMeasureModule } from './units-of-measure/units-of-measure.module';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [
    //  BrandsModule,
    AcademicYearsModule,
    BranchesModule,
    ClassesModule,
    GuardiansModule,
    RolesModule,
    SectionsModule,
    StaffModule,
    StudentsModule,
    SubjectsModule,
    TeachersModule,
    UsersModule,
    //  StockLocationsModule,
    //  UnitsOfMeasureModule,
    //  UnitConversionsModule,
    AuditLogsModule,
    AuthModule,
    SchoolsModule,
  ],
})
export class Modules {}
