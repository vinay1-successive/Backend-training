import express from "express";
import { dynamicValidation } from "../middleware/index.js";
import { login, register } from "../ controllers/index.js";

const dynamicLoginRouter = express.Router();

dynamicLoginRouter.post("/register", dynamicValidation, register);
dynamicLoginRouter.post("/login", dynamicValidation, login);

export default dynamicLoginRouter;
