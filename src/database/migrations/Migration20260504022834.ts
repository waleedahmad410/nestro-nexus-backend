import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022834 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "teachers" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "user_id" uuid not null, "employee_number" varchar(50) not null, "qualification" varchar(255) null, "specialization" varchar(120) null, "joining_date" timestamptz not null, "status" varchar(30) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "teachers_school_id_index" on "teachers" ("school_id");`,
    );
    this.addSql(
      `create index "teachers_branch_id_index" on "teachers" ("branch_id");`,
    );
    this.addSql(
      `create index "teachers_user_id_index" on "teachers" ("user_id");`,
    );
    this.addSql(
      `create index "teachers_employee_number_index" on "teachers" ("employee_number");`,
    );
    this.addSql(
      `create index "teachers_status_index" on "teachers" ("status");`,
    );
    this.addSql(
      `alter table "teachers" add constraint "teachers_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "teachers" add constraint "teachers_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "teachers" add constraint "teachers_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "teachers" cascade;`);
  }
}
