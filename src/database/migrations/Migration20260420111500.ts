import { Migration } from '@mikro-orm/migrations';

export class Migration20260420111500 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "stock_locations" ("id" uuid not null, "brand_id" uuid not null, "branch_id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "type" varchar(50) not null, "status" varchar(20) not null default 'active', "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "stock_locations_brand_id_index" on "stock_locations" ("brand_id");`,
    );
    this.addSql(
      `create index "stock_locations_branch_id_index" on "stock_locations" ("branch_id");`,
    );
    this.addSql(
      `create index "stock_locations_code_index" on "stock_locations" ("code");`,
    );
    this.addSql(
      `create index "stock_locations_type_index" on "stock_locations" ("type");`,
    );
    this.addSql(
      `create index "stock_locations_status_index" on "stock_locations" ("status");`,
    );
    this.addSql(
      `alter table "stock_locations" add constraint "stock_locations_brand_id_foreign" foreign key ("brand_id") references "brands" ("id");`,
    );
    this.addSql(
      `alter table "stock_locations" add constraint "stock_locations_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "stock_locations" cascade;`);
  }
}
