import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022820 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "school_settings" ("id" uuid not null, "school_id" uuid not null, "timezone" varchar(50) not null, "currency" varchar(10) not null, "date_format" varchar(20) not null, "language" varchar(10) not null, "active_academic_year_id" uuid null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "school_settings_school_id_index" on "school_settings" ("school_id");`,
    );

    this.addSql(
      `alter table "school_settings" add constraint "school_settings_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "school_settings" cascade;`);
  }
}
