import express from "express";
import { getData, putData } from "../ controllers/dataController.js";
import { authToken } from "../middleware/authMiddleware.js";
const dataRouter = express.Router();

dataRouter.get("/", authToken, getData);
dataRouter.post("/", authToken, putData);

export default dataRouter;
