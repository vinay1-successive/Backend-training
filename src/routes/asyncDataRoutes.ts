import express, { type Router } from "express";
import asyncDataFun from "../ controllers/asyncDataController.js";
class AsyncRouter {
  public asyncDataRouter: Router;
  constructor() {
    this.asyncDataRouter = express.Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.asyncDataRouter.post("/add", asyncDataFun);
  }
}

const asyncDataRouterInstance = new AsyncRouter();
export default asyncDataRouterInstance.asyncDataRouter;
