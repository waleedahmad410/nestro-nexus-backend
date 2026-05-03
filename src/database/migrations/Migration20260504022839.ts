import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022839 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "student_enrollments" ("id" uuid not null, "student_id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "academic_year_id" uuid not null, "class_id" uuid not null, "section_id" uuid not null, "roll_number" varchar(30) null, "enrollment_status" varchar(30) not null, "start_date" timestamptz not null, "end_date" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "student_enrollments_student_id_index" on "student_enrollments" ("student_id");`,
    );
    this.addSql(
      `create index "student_enrollments_school_id_index" on "student_enrollments" ("school_id");`,
    );
    this.addSql(
      `create index "student_enrollments_branch_id_index" on "student_enrollments" ("branch_id");`,
    );
    this.addSql(
      `create index "student_enrollments_academic_year_id_index" on "student_enrollments" ("academic_year_id");`,
    );
    this.addSql(
      `create index "student_enrollments_class_id_index" on "student_enrollments" ("class_id");`,
    );
    this.addSql(
      `create index "student_enrollments_section_id_index" on "student_enrollments" ("section_id");`,
    );
    this.addSql(
      `create index "student_enrollments_enrollment_status_index" on "student_enrollments" ("enrollment_status");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_student_id_foreign" foreign key ("student_id") references "students" ("id");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_academic_year_id_foreign" foreign key ("academic_year_id") references "academic_years" ("id");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_class_id_foreign" foreign key ("class_id") references "classes" ("id");`,
    );
    this.addSql(
      `alter table "student_enrollments" add constraint "student_enrollments_section_id_foreign" foreign key ("section_id") references "sections" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "student_enrollments" cascade;`);
  }
}
