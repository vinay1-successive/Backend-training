import express from "express";
import { setUser } from "../ controllers/authController.js";

const loginRouter = express.Router();

loginRouter.post("/", setUser);

export default loginRouter;
