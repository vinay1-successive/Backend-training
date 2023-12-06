import express from "express";
import { getData, getDataByParameter, putData } from "../ controllers/index.js";
import { authToken, limitMiddleWare, queryMiddleware } from "../middleware/index.js";

const dataRouter = express.Router();

dataRouter.get("/getData", queryMiddleware, authToken, getData);
dataRouter.get("/getData/:id", getDataByParameter);
dataRouter.post("/putData", limitMiddleWare,authToken, putData);

export default dataRouter;
