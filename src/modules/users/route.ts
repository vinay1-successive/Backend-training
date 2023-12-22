import express, { type Router } from "express";
import UserController from "./controller";
import userValidationMiddleware from "../../lib/middleware/userValidationMiddleware";
import authMiddleWare from "../../lib/middleware/authMiddleWare";

class UserRouter {
  private static instance: UserRouter;
  public userRouter: Router;
  private readonly userController: UserController;
  private constructor() {
    this.userRouter = express.Router();
    this.userController = new UserController();
    this.setupRoutes();
  }

  public static getInstance(): UserRouter {
    return this.instance || (this.instance = new this());
  }

  public setupRoutes = (): void => {
    this.userRouter.post(
      "/register",
      userValidationMiddleware,
      this.userController.register,
    );
    this.userRouter.get("/name", authMiddleWare, this.userController.getByName);
    this.userRouter.get("/id", authMiddleWare, this.userController.getById);
    this.userRouter.post("/login", this.userController.login);
  };
}

export default UserRouter.getInstance().userRouter;
