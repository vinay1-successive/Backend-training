import express from "express";
import asyncDataFun from "../ controllers/asyncDataController.js";

const asyncDataRouter = express.Router();

asyncDataRouter.post("/add", asyncDataFun);

export default asyncDataRouter;
