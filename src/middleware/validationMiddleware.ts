import { NextFunction, Request, Response } from "express";
import userSchema from "../utils/userSchema";

class ValidationMiddleware {
  public validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const user = req.body;
      const { error, value } = userSchema.validate(user, { abortEarly: false });
      if (error) {
        throw error.details;
      }
      next();
    } catch (error) {
      res.status(422).json(error);
    }
  }
}

const validationMiddlewareInstance = new ValidationMiddleware();
export default validationMiddlewareInstance.validate.bind(
  validationMiddlewareInstance
);
