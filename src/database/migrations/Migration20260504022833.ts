import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022833 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "staff" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "user_id" uuid not null, "employee_number" varchar(50) not null, "department" varchar(100) null, "designation" varchar(100) null, "employment_type" varchar(50) not null, "joining_date" timestamptz not null, "status" varchar(30) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "staff_school_id_index" on "staff" ("school_id");`,
    );
    this.addSql(
      `create index "staff_branch_id_index" on "staff" ("branch_id");`,
    );
    this.addSql(`create index "staff_user_id_index" on "staff" ("user_id");`);
    this.addSql(
      `create index "staff_employee_number_index" on "staff" ("employee_number");`,
    );
    this.addSql(`create index "staff_status_index" on "staff" ("status");`);
    this.addSql(
      `alter table "staff" add constraint "staff_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "staff" add constraint "staff_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "staff" add constraint "staff_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "staff" cascade;`);
  }
}
