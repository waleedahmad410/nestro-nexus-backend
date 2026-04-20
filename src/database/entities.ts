import { Brand } from '../modules/brands/entities/brand.entity';
import { Branch } from '../modules/branches/entities/branch.entity';
import { Role } from '../modules/roles/entities/role.entity';
import { AuditLog } from '../modules/audit-logs/entities/audit-log.entity';
import { UserSession } from '../modules/auth/entities/user-session.entity';
import { StockLocation } from '../modules/stock-locations/entities/stock-location.entity';
import { UnitConversion } from '../modules/unit-conversions/entities/unit-conversion.entity';
import { UnitOfMeasure } from '../modules/units-of-measure/entities/unit-of-measure.entity';
import { UserRoleAssignment } from '../modules/users/entities/user-role-assignment.entity';
import { User } from '../modules/users/entities/user.entity';

export const entities = [
  Brand,
  Branch,
  Role,
  User,
  UserRoleAssignment,
  StockLocation,
  UnitOfMeasure,
  UnitConversion,
  AuditLog,
  UserSession,
];
