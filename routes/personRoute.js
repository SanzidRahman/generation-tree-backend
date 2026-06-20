import express from "express";
import {
  createChild,
  createHusband,
  createWife,
  getPersons,
  getSinglePersons,
} from "../controllers/personControllers.js";

const route = express.Router();

route.get("/persons/:id", getSinglePersons);
route.get("/persons", getPersons);
route.post("/husband", createHusband);
route.post("/wife", createWife);
route.post("/child", createChild);

export default route;
