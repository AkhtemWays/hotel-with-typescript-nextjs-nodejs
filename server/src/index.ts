import "reflect-metadata";
import express from "express";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import { Order } from "./entities/Order";
import microConfig from "./mikro-orm.config";
import { __prod__ } from "./constants";

async function main() {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  // const order: Order = orm.em.create(Order, {
  //   firstName: "Alina",
  //   lastName: "Kabaeva",
  // });
  // await orm.em.persistAndFlush(order);
  // const orders = await orm.em.find(Order, {});
  // console.log(orders);
  const app = express();
  app.use(cors());
  app.listen(4000, () => console.log("success"));
}

main().catch((e) => console.log(e));
