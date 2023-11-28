import express from "express";
import { getData, putData } from "../ controllers/index.js";
import { authToken, queryMiddleware } from "../middleware/index.js";

const dataRouter = express.Router();

dataRouter.get("/", queryMiddleware, authToken, getData);
dataRouter.post("/", authToken, putData);

export default dataRouter;
