import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022832 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "subjects" ("id" uuid not null, "school_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "description" varchar(255) null, "subject_type" varchar(50) not null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "subjects_school_id_index" on "subjects" ("school_id");`,
    );
    this.addSql(`create index "subjects_code_index" on "subjects" ("code");`);
    this.addSql(
      `create index "subjects_subject_type_index" on "subjects" ("subject_type");`,
    );
    this.addSql(
      `alter table "subjects" add constraint "subjects_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "subjects" cascade;`);
  }
}
