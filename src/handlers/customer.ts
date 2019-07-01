import { Router, Request, Response } from "express";
import { customerRepository } from "../repository/customer-repository";
import { Logger } from "../share/logger";

export const customerRouter = Router();
const log = new Logger("customer-handler initialized");

customerRouter.get("/", async (req, res) => {
  res.send("server heard route /");
});

customerRouter.get("/test", async (req, res) => {
  res.send("server heard route /");
});

customerRouter.get("/getmany/:count", async (req: Request, res: Response) => {
  const { count } = req.params;
  log.info("req.params ---", req.params);
  const response = await customerRepository.findMany(Number(count));
  res.send(JSON.stringify(response));
});
