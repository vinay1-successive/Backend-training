import express, { type Router } from "express";
import { cookieControllerInstance } from "../ controllers/index.js";
class CookieRouter {
  public cookieRouter: Router;
  constructor() {
    this.cookieRouter = express.Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.cookieRouter.get("/setValue", cookieControllerInstance.setData);
    this.cookieRouter.get("/checkValue", cookieControllerInstance.checkData);
  }
}

const cookieRouterInstance = new CookieRouter();
export default cookieRouterInstance.cookieRouter;
