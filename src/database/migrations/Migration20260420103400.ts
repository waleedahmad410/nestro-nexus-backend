import { Migration } from '@mikro-orm/migrations';

export class Migration20260420103400 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "branches" ("id" uuid not null, "brand_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "email" varchar(160) null, "phone" varchar(40) null, "address_line_1" varchar(180) not null, "address_line_2" varchar(180) null, "city" varchar(100) not null, "state" varchar(100) null, "country" varchar(100) not null, "postal_code" varchar(20) null, "latitude" numeric(10,7) null, "longitude" numeric(10,7) null, "timezone" varchar(80) not null, "status" varchar(20) not null default 'active', "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "branches_brand_id_index" on "branches" ("brand_id");`,
    );
    this.addSql(`create index "branches_code_index" on "branches" ("code");`);
    this.addSql(
      `create index "branches_status_index" on "branches" ("status");`,
    );
    this.addSql(
      `alter table "branches" add constraint "branches_brand_id_foreign" foreign key ("brand_id") references "brands" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "branches" cascade;`);
  }
}
