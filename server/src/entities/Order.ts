import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Order {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "text" })
  firstName!: string;

  @Property({ type: "text" })
  lastName!: string;
}
