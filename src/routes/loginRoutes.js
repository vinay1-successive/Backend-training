import express from "express";
import { setUser } from "../ controllers/index.js";
import { validate } from "../middleware/index.js";
import { locationMiddleware } from "../middleware/index.js";

const loginRouter = express.Router();

loginRouter.post("/", locationMiddleware, validate, setUser);

export default loginRouter;
