import express, { type Router } from "express";
import CountryService from "../services/countryService";
import { countryControllerInstance } from "../ controllers";
import countryDataValidationMiddleware from "../middleware/countryDataValidationMiddleware";

class CountryRouter {
  public countryRouter: Router;
  public countryService: CountryService;

  constructor() {
    this.countryRouter = express.Router();
    this.countryService = new CountryService();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.countryRouter.post(
      "/cc",
      countryDataValidationMiddleware,
      countryControllerInstance.addData,
    );
    this.countryRouter.get("/cc", countryControllerInstance.getAllData);
    this.countryRouter.patch("/update", countryControllerInstance.updateById);
  }
}

const countryRouterInstance = new CountryRouter();
export default countryRouterInstance.countryRouter;
