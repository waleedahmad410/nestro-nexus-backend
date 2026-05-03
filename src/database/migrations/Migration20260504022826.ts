import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022826 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "password_reset_tokens" ("id" uuid not null, "user_id" uuid not null, "token_hash" varchar(255) not null, "expires_at" timestamptz not null, "used_at" timestamptz null, "created_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "password_reset_tokens_user_id_index" on "password_reset_tokens" ("user_id");`,
    );
    this.addSql(
      `create index "password_reset_tokens_token_hash_index" on "password_reset_tokens" ("token_hash");`,
    );
    this.addSql(
      `create index "password_reset_tokens_expires_at_index" on "password_reset_tokens" ("expires_at");`,
    );

    this.addSql(
      `alter table "password_reset_tokens" add constraint "password_reset_tokens_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "password_reset_tokens" cascade;`);
  }
}
