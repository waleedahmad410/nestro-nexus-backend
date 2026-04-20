import { Migration } from '@mikro-orm/migrations';

export class Migration20260420104500 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "roles" ("id" uuid not null, "brand_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "scope" varchar(50) not null, "description" varchar(255) null, "status" varchar(20) not null default 'active', "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(`create index "roles_brand_id_index" on "roles" ("brand_id");`);
    this.addSql(`create index "roles_code_index" on "roles" ("code");`);
    this.addSql(`create index "roles_scope_index" on "roles" ("scope");`);
    this.addSql(`create index "roles_status_index" on "roles" ("status");`);
    this.addSql(
      `alter table "roles" add constraint "roles_brand_id_foreign" foreign key ("brand_id") references "brands" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "roles" cascade;`);
  }
}
