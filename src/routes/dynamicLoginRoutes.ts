import express, { type Router } from "express";
import { dynamicValidation } from "../middleware/index.js";
import { dynamicControllerInstance } from "../ controllers/index.js";
class DynamicRouter {
  public dynamicLoginRouter: Router;
  constructor() {
    this.dynamicLoginRouter = express.Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.dynamicLoginRouter.post(
      "/register",
      dynamicValidation,
      dynamicControllerInstance.register,
    );
    this.dynamicLoginRouter.post(
      "/login",
      dynamicValidation,
      dynamicControllerInstance.login,
    );
  }
}

const dynamicLoginRouterInstance = new DynamicRouter();
export default dynamicLoginRouterInstance.dynamicLoginRouter;
