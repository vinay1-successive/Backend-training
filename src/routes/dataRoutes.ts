// import express from "express";
// import { getData, getDataByParameter, putData } from "../ controllers/index.js";
// import { authToken, limitMiddleWare, queryMiddleware } from "../middleware/index.js";

// const dataRouter = express.Router();

// dataRouter.get("/getData", queryMiddleware, authToken, getData);
// dataRouter.get("/getData/:id", getDataByParameter);
// dataRouter.post("/putData", limitMiddleWare,authToken, putData);

// export default dataRouter;

import express, { Router } from "express";
import { check, dataControllerInstance} from "../ controllers/index.js";
import {authToken,limitMiddleWare,queryMiddleware} from "../middleware/index.js";
class DataRouter {
  public dataRouter: Router;
  constructor() {
    this.dataRouter = express.Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.dataRouter.get("/getData", queryMiddleware, authToken, dataControllerInstance.getData);
    this.dataRouter.get("/getData/:id", dataControllerInstance.getDataByParameter);
    this.dataRouter.post("/putData", limitMiddleWare, authToken, dataControllerInstance.putData);
    this.dataRouter.get("/health",check);
  }
}

const dataRouterInstance = new DataRouter();
export default dataRouterInstance.dataRouter;
