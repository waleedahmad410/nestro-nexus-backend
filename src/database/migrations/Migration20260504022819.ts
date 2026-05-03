import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022819 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "schools" ("id" uuid not null, "name" varchar(255) not null, "code" varchar(50) not null, "registration_number" varchar(100) null, "email" varchar(160) not null, "phone" varchar(40) null, "website" varchar(255) null, "logo_url" varchar(500) null, "address" text null, "city" varchar(100) null, "state" varchar(100) null, "country" varchar(100) null, "postal_code" varchar(20) null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(`create index "schools_code_index" on "schools" ("code");`);
    this.addSql(`create index "schools_email_index" on "schools" ("email");`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "schools" cascade;`);
  }
}
