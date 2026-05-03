import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022822 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "academic_years" ("id" uuid not null, "school_id" uuid not null, "name" varchar(120) not null, "start_date" timestamptz not null, "end_date" timestamptz not null, "is_active" boolean not null default true, "is_locked" boolean not null default false, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "academic_years_school_id_index" on "academic_years" ("school_id");`,
    );

    this.addSql(
      `alter table "academic_years" add constraint "academic_years_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "academic_years" cascade;`);
  }
}
