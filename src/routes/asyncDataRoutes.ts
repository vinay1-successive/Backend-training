// import express from "express";
// import asyncDataFun from "../ controllers/asyncDataController.js";

// const asyncDataRouter = express.Router();

// asyncDataRouter.post("/add", asyncDataFun);

// export default asyncDataRouter;

import express, { Router } from "express";
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
