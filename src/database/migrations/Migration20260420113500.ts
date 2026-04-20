import { Migration } from '@mikro-orm/migrations';

export class Migration20260420113500 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "user_sessions" ("id" uuid not null, "user_id" uuid not null, "refresh_token_hash" varchar(255) not null, "ip_address" varchar(45) null, "user_agent" varchar(255) null, "expires_at" timestamptz not null, "revoked_at" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "user_sessions_user_id_index" on "user_sessions" ("user_id");`,
    );
    this.addSql(
      `create index "user_sessions_expires_at_index" on "user_sessions" ("expires_at");`,
    );
    this.addSql(
      `alter table "user_sessions" add constraint "user_sessions_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "user_sessions" cascade;`);
  }
}
