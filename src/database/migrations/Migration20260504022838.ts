import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022838 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "students" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "user_id" uuid not null, "admission_number" varchar(50) not null, "blood_group" varchar(10) null, "medical_notes" text null, "admission_date" timestamptz not null, "status" varchar(30) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "students_school_id_index" on "students" ("school_id");`,
    );
    this.addSql(
      `create index "students_branch_id_index" on "students" ("branch_id");`,
    );
    this.addSql(
      `create index "students_user_id_index" on "students" ("user_id");`,
    );
    this.addSql(
      `create index "students_admission_number_index" on "students" ("admission_number");`,
    );
    this.addSql(
      `create index "students_status_index" on "students" ("status");`,
    );
    this.addSql(
      `alter table "students" add constraint "students_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "students" add constraint "students_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "students" add constraint "students_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "students" cascade;`);
  }
}
