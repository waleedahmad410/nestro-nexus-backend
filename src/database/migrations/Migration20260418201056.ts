import { Migration } from '@mikro-orm/migrations';

export class Migration20260418201056 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "brands" ("id" uuid not null, "name" varchar(120) not null, "slug" varchar(160) not null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`);
    this.addSql(`alter table "brands" add constraint "brands_slug_unique" unique ("slug");`);
  }

}
