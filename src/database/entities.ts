
import { Branch } from '../modules/branches/entities/branch.entity';
import { Role } from '../modules/roles/entities/role.entity';
import { AuditLog } from '../modules/audit-logs/entities/audit-log.entity';
import { UserSession } from '../modules/auth/entities/user-session.entity';
import { UserRoleAssignment } from '../modules/users/entities/user-role-assignment.entity';
import { User } from '../modules/users/entities/user.entity';
import { School } from '../modules/schools/entities/school.entity';
import { SchoolSetting } from '../modules/schools/entities/school-setting.entity';

export const entities = [
  Branch,
  Role,
  User,
  UserRoleAssignment,
  AuditLog,
  UserSession,
  School,  AuditLog,
  UserSession,
  School,

  SchoolSetting,
];
