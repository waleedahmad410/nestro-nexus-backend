import { Migration } from '@mikro-orm/migrations';

export class Migration20260420110000 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "users" ("id" uuid not null, "full_name" varchar(120) not null, "email" varchar(160) not null, "phone" varchar(40) null, "password_hash" varchar(255) not null, "status" varchar(20) not null default 'active', "last_login_at" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(`create index "users_email_index" on "users" ("email");`);
    this.addSql(`create index "users_status_index" on "users" ("status");`);

    this.addSql(
      `create table "user_role_assignments" ("id" uuid not null, "user_id" uuid not null, "role_id" uuid not null, "brand_id" uuid not null, "branch_id" uuid not null, "assigned_by_user_id" uuid not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "user_role_assignments_user_id_index" on "user_role_assignments" ("user_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_role_id_index" on "user_role_assignments" ("role_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_brand_id_index" on "user_role_assignments" ("brand_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_branch_id_index" on "user_role_assignments" ("branch_id");`,
    );
    this.addSql(
      `create index "user_role_assignments_assigned_by_user_id_index" on "user_role_assignments" ("assigned_by_user_id");`,
    );

    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_role_id_foreign" foreign key ("role_id") references "roles" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_brand_id_foreign" foreign key ("brand_id") references "brands" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "user_role_assignments" add constraint "user_role_assignments_assigned_by_user_id_foreign" foreign key ("assigned_by_user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "user_role_assignments" cascade;`);
    this.addSql(`drop table if exists "users" cascade;`);
  }
}
