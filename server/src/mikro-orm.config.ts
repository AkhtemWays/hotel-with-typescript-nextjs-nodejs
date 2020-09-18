import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Order } from "./entities/Order";
import path from "path";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
export default {
  dbName: "akhtem",
  entities: [Order],
  debug: !__prod__,
  type: "postgresql",
  driver: PostgreSqlDriver,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
