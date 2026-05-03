import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022841 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "student_guardians" ("id" uuid not null, "student_id" uuid not null, "guardian_id" uuid not null, "relation_type" varchar(50) not null, "is_primary_guardian" boolean not null default false, "is_emergency_contact" boolean not null default false, "can_pickup_student" boolean not null default false, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "student_guardians_student_id_index" on "student_guardians" ("student_id");`,
    );
    this.addSql(
      `create index "student_guardians_guardian_id_index" on "student_guardians" ("guardian_id");`,
    );
    this.addSql(
      `create index "student_guardians_relation_type_index" on "student_guardians" ("relation_type");`,
    );
    this.addSql(
      `alter table "student_guardians" add constraint "student_guardians_student_id_foreign" foreign key ("student_id") references "students" ("id");`,
    );
    this.addSql(
      `alter table "student_guardians" add constraint "student_guardians_guardian_id_foreign" foreign key ("guardian_id") references "guardians" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "student_guardians" cascade;`);
  }
}
