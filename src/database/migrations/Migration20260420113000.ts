import { Migration } from '@mikro-orm/migrations';

export class Migration20260420113000 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "audit_logs" ("id" uuid not null, "actor_user_id" uuid not null, "action" varchar(80) not null, "entity_name" varchar(120) not null, "entity_id" uuid not null, "old_values" jsonb null, "new_values" jsonb null, "ip_address" varchar(45) null, "user_agent" varchar(255) null, "created_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "audit_logs_actor_user_id_index" on "audit_logs" ("actor_user_id");`,
    );
    this.addSql(
      `create index "audit_logs_action_index" on "audit_logs" ("action");`,
    );
    this.addSql(
      `create index "audit_logs_entity_name_index" on "audit_logs" ("entity_name");`,
    );
    this.addSql(
      `create index "audit_logs_entity_id_index" on "audit_logs" ("entity_id");`,
    );
    this.addSql(
      `alter table "audit_logs" add constraint "audit_logs_actor_user_id_foreign" foreign key ("actor_user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "audit_logs" cascade;`);
  }
}
