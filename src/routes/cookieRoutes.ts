import express from "express";
import { setData, checkData } from "../ controllers/index.js";

const cookieRouter = express.Router();

cookieRouter.get("/setValue", setData);
cookieRouter.get("/checkValue", checkData);

export default cookieRouter;
