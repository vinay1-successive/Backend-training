import { type NextFunction, type Request, type Response } from "express";
import type ICar from "../../modules/cars/repository/Icar";
import CarValidationSchema from "../../modules/cars/validation";
class ValidationMiddleware {
  public validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const { user, ...car } = req.body;
      const data: ICar[] | null = car;
      const { error } = CarValidationSchema.validate(data, {
        abortEarly: false,
      });
      if (error) {
        throw error;
      }
      req.body = car;
      next();
    } catch (error) {
      res.status(422).json(error);
    }
  }
}

const validationMiddlewareInstance = new ValidationMiddleware();
export default validationMiddlewareInstance.validate.bind(
  validationMiddlewareInstance,
);
