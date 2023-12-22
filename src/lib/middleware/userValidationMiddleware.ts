import { type NextFunction, type Request, type Response } from "express";
import { type IUser } from "../../modules/users/repository/IUser";
import UserValidationSchema from "../../modules/users/validation";
class ValidationMiddleware {
  public validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const data: IUser[] | null = req.body;
      const { error } = UserValidationSchema.validate(data, {
        abortEarly: false,
      });
      if (error) {
        throw error;
      }
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
