import { Migration } from '@mikro-orm/migrations';

export class Migration20260419163941 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "brands" ("id" uuid not null, "name" varchar(120) not null, "slug" varchar(160) not null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`);
    this.addSql(`create index "brands_slug_index" on "brands" ("slug");`);
    this.addSql(`alter table "brands" add constraint "brands_slug_unique" unique ("slug");`);
    this.addSql(`create index "brands_is_active_index" on "brands" ("is_active");`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "brands" cascade;`);
  }

}
