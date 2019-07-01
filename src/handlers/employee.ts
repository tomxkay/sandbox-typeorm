import { Router } from "express";
export const employeeRouter = Router();

employeeRouter.get("/", (req, res) => {
  res.send("employee handler /");
});

employeeRouter.get("/getone", (req, res) => {
  res.send("employee handler /getone");
});

employeeRouter.get("/getten", (req, res) => {
  res.send("employee handler /getten");
});
