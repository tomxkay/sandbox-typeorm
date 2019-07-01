import { Router } from "express";
import { customerRouter } from "./customer";
import { employeeRouter } from "./employee";
export const router = Router();

router.get("/", (req, res) => {
  res.send("customer handler /");
});
router.use("/customer", customerRouter);
router.use("/employee", employeeRouter);
