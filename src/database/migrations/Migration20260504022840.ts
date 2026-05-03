import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022840 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "guardians" ("id" uuid not null, "school_id" uuid not null, "user_id" uuid not null, "relation_type" varchar(50) not null, "occupation" varchar(120) null, "phone" varchar(40) null, "email" varchar(160) null, "address" text null, "city" varchar(100) null, "state" varchar(100) null, "country" varchar(100) null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, primary key ("id"));`,
    );
    this.addSql(
      `create index "guardians_school_id_index" on "guardians" ("school_id");`,
    );
    this.addSql(
      `create index "guardians_user_id_index" on "guardians" ("user_id");`,
    );
    this.addSql(
      `create index "guardians_relation_type_index" on "guardians" ("relation_type");`,
    );
    this.addSql(
      `alter table "guardians" add constraint "guardians_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "guardians" add constraint "guardians_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "guardians" cascade;`);
  }
}
