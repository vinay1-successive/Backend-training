import express, { type Router } from "express";
import { locationMiddleware, validate } from "../middleware";
import { setUser } from "../ controllers";
class LoginRouter {
  public loginRouter: Router;
  constructor() {
    this.loginRouter = express.Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.loginRouter.post("/userLogin", locationMiddleware, validate, setUser);
  }
}

const loginRouterInstance = new LoginRouter();
export default loginRouterInstance.loginRouter;
