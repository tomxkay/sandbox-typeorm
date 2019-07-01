import * as express from "express";
import "./connection/mysql-db";
import { router } from "./handlers";

const app = express();
const port = 8080;

app.use("/", router);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
