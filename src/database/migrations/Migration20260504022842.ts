import { Migration } from '@mikro-orm/migrations';

export class Migration20260504022842 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(`set names 'utf8';`);

    this.addSql(
      `create table "audit_logs" ("id" uuid not null, "school_id" uuid not null, "branch_id" uuid not null, "user_id" uuid not null, "module_name" varchar(120) not null, "table_name" varchar(120) not null, "record_id" uuid not null, "action" varchar(80) not null, "old_values" jsonb null, "new_values" jsonb null, "ip_address" varchar(45) null, "user_agent" varchar(255) null, "created_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `create index "audit_logs_school_id_index" on "audit_logs" ("school_id");`,
    );
    this.addSql(
      `create index "audit_logs_branch_id_index" on "audit_logs" ("branch_id");`,
    );
    this.addSql(
      `create index "audit_logs_user_id_index" on "audit_logs" ("user_id");`,
    );
    this.addSql(
      `create index "audit_logs_table_name_index" on "audit_logs" ("table_name");`,
    );
    this.addSql(
      `create index "audit_logs_record_id_index" on "audit_logs" ("record_id");`,
    );
    this.addSql(
      `create index "audit_logs_action_index" on "audit_logs" ("action");`,
    );

    this.addSql(
      `alter table "audit_logs" add constraint "audit_logs_school_id_foreign" foreign key ("school_id") references "schools" ("id");`,
    );
    this.addSql(
      `alter table "audit_logs" add constraint "audit_logs_branch_id_foreign" foreign key ("branch_id") references "branches" ("id");`,
    );
    this.addSql(
      `alter table "audit_logs" add constraint "audit_logs_user_id_foreign" foreign key ("user_id") references "users" ("id");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "audit_logs" cascade;`);
  }
}
