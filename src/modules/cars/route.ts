import express, { type Router } from "express";
import CarController from "./controller";
import carValidationMiddleware from "../../lib/middleware/carValidationMiddleware";
import authMiddleWare from "../../lib/middleware/authMiddleWare";

class CarRouter {
  public carRouter: Router;
  public carController: CarController;

  constructor() {
    this.carRouter = express.Router();
    this.carController = new CarController();
    this.setupRoutes();
  }

  public setupRoutes = (): void => {
    this.carRouter.post(
      "/",
      authMiddleWare,
      carValidationMiddleware,
      this.carController.addCar,
    );
    this.carRouter.get("/", authMiddleWare, this.carController.getAll);
    this.carRouter.get("/:id", authMiddleWare, this.carController.getById);
    this.carRouter.get("/name", authMiddleWare, this.carController.getByName);
    this.carRouter.delete("/", authMiddleWare, this.carController.deleteAll);
    this.carRouter.delete(
      "/:id",
      authMiddleWare,
      this.carController.deleteById,
    );
    this.carRouter.patch(
      "/:id",
      authMiddleWare,
      carValidationMiddleware,
      this.carController.updateById,
    );
  };
}
const carRouterInstance = new CarRouter();
export default carRouterInstance.carRouter;
