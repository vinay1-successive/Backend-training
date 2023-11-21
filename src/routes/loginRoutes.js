import express from "express";
import { setUser } from "../ controllers/authController.js";
import validate from "../middleware/validationMiddleware.js";

const loginRouter = express.Router();

loginRouter.post("/", validate, setUser);

export default loginRouter;
