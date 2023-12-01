import express from "express";
import cookieParser from "cookie-parser";
import { Request, Response, NextFunction } from "express";
import { errorHandler, headerMiddleware } from "./middleware/index.js";
import createError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes.js";
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan(":method :url :date[clf]"));
app.use(headerMiddleware({ CustomKey1: "CustomValue1" }));
app.use(cookieParser());

app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, "Not Found"));
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started at ${port}`);
});
