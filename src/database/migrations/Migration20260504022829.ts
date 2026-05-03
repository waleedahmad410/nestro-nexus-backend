import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022829 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "role_permissions" ("id" uuid not null, "role_id" uuid not null, "permission_id" uuid not null, "created_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "role_permissions_role_id_index" on "role_permissions" ("role_id");`,
    );
    this.addSql(
      `create index "role_permissions_permission_id_index" on "role_permissions" ("permission_id");`,
    );

    this.addSql(
      `alter table "role_permissions" add constraint "role_permissions_role_id_foreign" foreign key ("role_id") references "roles" ("id");`,
    );
    this.addSql(
      `alter table "role_permissions" add constraint "role_permissions_permission_id_foreign" foreign key ("permission_id") references "permissions" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "role_permissions" cascade;`);
  }
}
