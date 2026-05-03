import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022828 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "permissions" ("id" uuid not null, "module_name" varchar(80) not null, "action_name" varchar(80) not null, "code" varchar(120) not null, "description" varchar(255) null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "permissions_module_name_index" on "permissions" ("module_name");`,
    );
    this.addSql(
      `create index "permissions_action_name_index" on "permissions" ("action_name");`,
    );
    this.addSql(
      `create index "permissions_code_index" on "permissions" ("code");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "permissions" cascade;`);
  }
}
