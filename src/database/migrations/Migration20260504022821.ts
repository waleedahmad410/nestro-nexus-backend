import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022821 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "branches" ("id" uuid not null, "school_id" uuid not null, "name" varchar(255) not null, "code" varchar(50) not null, "email" varchar(160) not null, "phone" varchar(40) null, "address" text null, "city" varchar(100) null, "state" varchar(100) null, "country" varchar(100) null, "postal_code" varchar(20) null, "is_main_branch" boolean not null default false, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "branches_school_id_index" on "branches" ("school_id");`,
    );
    this.addSql(`create index "branches_code_index" on "branches" ("code");`);
    this.addSql(`create index "branches_email_index" on "branches" ("email");`);

    this.addSql(
      `alter table "branches" add constraint "branches_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "branches" cascade;`);
  }
}
