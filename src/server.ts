import express, {
  type Application,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import config from "./config";
import { errorHandler, headerMiddleware } from "./middleware/index.js";
import router from "./routes.js";
import DatabaseConnection from "./lib/database/connection.js";
class Server {
  private readonly app: Application;
  private readonly dbConnection: DatabaseConnection;
  constructor() {
    this.app = express();
    this.dbConnection = new DatabaseConnection();
  }

  public async setup(): Promise<void> {
    dotenv.config();

    this.app.use(express.json());
    this.app.use(morgan(":method :url :date[clf]"));
    this.app.use(headerMiddleware);
    this.app.use(cookieParser());
    try {
      await this.dbConnection.setupDB();
      console.log("Database connected successfully");
      this.start();
    } catch (error) {
      console.error("Error connecting to the database:", error);
      process.exit(1);
    }
    this.app.use(router);

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(createError(404, "Not Found"));
    });
    this.app.use(errorHandler);
  }

  public start(): void {
    this.app.listen(config.port, () => {
      console.log(`Started at ${config.port}`);
    });
  }
}

export default Server;
