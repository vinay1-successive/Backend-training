// import express from "express";
// import cookieParser from "cookie-parser";
// import { Request, Response, NextFunction } from "express";
// import { errorHandler, headerMiddleware } from "./middleware/index.js";
// import createError from "http-errors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import router from "./routes.js";
// const app = express();
// dotenv.config();
// const port = process.env.PORT;

// app.use(express.json());
// app.use(morgan(":method :url :date[clf]"));
// app.use(headerMiddleware({ CustomKey1: "CustomValue1" }));
// app.use(cookieParser());

// app.use(router);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, "Not Found"));
// });
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Started at ${port}`);
// });

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
