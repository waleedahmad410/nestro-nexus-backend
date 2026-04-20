import { Migration } from '@mikro-orm/migrations';

export class Migration20260420112500 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "unit_conversions" ("id" uuid not null, "from_unit_id" uuid not null, "to_unit_id" uuid not null, "multiplier" numeric(18,6) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "unit_conversions_from_unit_id_index" on "unit_conversions" ("from_unit_id");`,
    );
    this.addSql(
      `create index "unit_conversions_to_unit_id_index" on "unit_conversions" ("to_unit_id");`,
    );
    this.addSql(
      `alter table "unit_conversions" add constraint "unit_conversions_from_unit_id_foreign" foreign key ("from_unit_id") references "units_of_measure" ("id");`,
    );
    this.addSql(
      `alter table "unit_conversions" add constraint "unit_conversions_to_unit_id_foreign" foreign key ("to_unit_id") references "units_of_measure" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "unit_conversions" cascade;`);
  }
}
