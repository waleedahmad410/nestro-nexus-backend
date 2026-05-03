import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022827 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "roles" ("id" uuid not null, "school_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "role_type" varchar(50) not null, "description" varchar(255) null, "is_system_role" boolean not null default false, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "roles_school_id_index" on "roles" ("school_id");`,
    );
    this.addSql(`create index "roles_code_index" on "roles" ("code");`);
    this.addSql(
      `create index "roles_role_type_index" on "roles" ("role_type");`,
    );

    this.addSql(
      `alter table "roles" add constraint "roles_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "roles" cascade;`);
  }
}
