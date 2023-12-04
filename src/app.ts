import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import config from "./config";
import { errorHandler, headerMiddleware } from "./middleware/index.js";
import router from "./routes.js";

class Server {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public setup(): void {
    dotenv.config();

    this.app.use(express.json());
    this.app.use(morgan(":method :url :date[clf]"));
    this.app.use(headerMiddleware);
    this.app.use(cookieParser());

    this.app.use(router);

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(createError(404, "Not Found"));
    });
    this.app.use(errorHandler);

    this.app.listen(config.port, () => {
      console.log(`Started at ${config.port}`);
    });
  }
}

export default Server;
