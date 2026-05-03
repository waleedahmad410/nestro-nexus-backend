import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022831 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "classes" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "level" varchar(50) not null, "sort_order" int not null default 0, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "classes_school_id_index" on "classes" ("school_id");`,
    );
    this.addSql(
      `create index "classes_branch_id_index" on "classes" ("branch_id");`,
    );
    this.addSql(`create index "classes_code_index" on "classes" ("code");`);
    this.addSql(`create index "classes_level_index" on "classes" ("level");`);
    this.addSql(
      `alter table "classes" add constraint "classes_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "classes" add constraint "classes_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "classes" cascade;`);
  }
}
