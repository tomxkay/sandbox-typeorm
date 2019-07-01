import { createConnection, getConnection } from "typeorm";
import {
  customers,
  employees,
  offices,
  orderdetails,
  orders,
  payments,
  productlines,
  products
} from "../entities";
import { Logger } from "../share/logger";

const log = new Logger("connection:mysql-db");
log.info("mysql-db connection initialize");

(async () => {
  try {
    await createConnection({
      type: "mysql",
      host: "mysql",
      port: 3306,
      username: "root",
      password: "",
      database: "classicmodels",
      synchronize: true,
      logging: true,
      entities: [
        customers,
        employees,
        offices,
        orderdetails,
        orders,
        payments,
        productlines,
        products
      ]
    });
  } catch (err) {
    log.error("Error in creating connection", err);
  }
})();

export const connection = getConnection();
