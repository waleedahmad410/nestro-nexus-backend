import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022835 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "sections" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "class_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "capacity" int null, "class_teacher_id" uuid null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "sections_school_id_index" on "sections" ("school_id");`,
    );
    this.addSql(
      `create index "sections_branch_id_index" on "sections" ("branch_id");`,
    );
    this.addSql(
      `create index "sections_class_id_index" on "sections" ("class_id");`,
    );
    this.addSql(`create index "sections_code_index" on "sections" ("code");`);
    this.addSql(
      `create index "sections_class_teacher_id_index" on "sections" ("class_teacher_id");`,
    );
    this.addSql(
      `alter table "sections" add constraint "sections_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "sections" add constraint "sections_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "sections" add constraint "sections_class_id_foreign" foreign key ("class_id") references "classes" ("id");`,
    );
    this.addSql(
      `alter table "sections" add constraint "sections_class_teacher_id_foreign" foreign key ("class_teacher_id") references "teachers" ("id") on delete set null;`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "sections" cascade;`);
  }
}
