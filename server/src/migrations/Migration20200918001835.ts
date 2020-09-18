import { Migration } from '@mikro-orm/migrations';

export class Migration20200918001835 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "order" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "first_name" text not null, "last_name" text not null);');

    this.addSql('drop table if exists "post" cascade;');
  }

}
