import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022830 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "user_role_assignments" ("id" uuid not null, "user_id" uuid not null, "role_id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "user_role_assignments_user_id_index" on "user_role_assignments" ("user_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_role_id_index" on "user_role_assignments" ("role_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_school_id_index" on "user_role_assignments" ("school_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_branch_id_index" on "user_role_assignments" ("branch_id");`,
    );

    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_role_id_foreign" foreign key ("role_id") references "roles" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "user_role_assignments" cascade;`);
  }
}
