import { Migration } from '@mikro-orm/migrations';

export class Migration20260420112000 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "units_of_measure" ("id" uuid not null, "name" varchar(120) not null, "code" varchar(50) not null, "type" varchar(50) not null, "precision_value" int not null default 0, "status" varchar(20) not null default 'active', "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "units_of_measure_code_index" on "units_of_measure" ("code");`,
    );
    this.addSql(
      `create index "units_of_measure_type_index" on "units_of_measure" ("type");`,
    );
    this.addSql(
      `create index "units_of_measure_status_index" on "units_of_measure" ("status");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "units_of_measure" cascade;`);
  }
}
