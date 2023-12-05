import schema from "../utils/Schemas.js";
import { type Request, type Response, type NextFunction } from "express";
class ValidationError extends Error {
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.details = details;
  }
}
class DynamicValidationMiddleware {
  public dynamicValidation(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    try {
      const url = req.url.split("/")[1];
      const user = req.body;
      const validateFun = schema[url];
      const { error, value } = validateFun.validate(user, {
        abortEarly: false,
      });
      if (error) {
        const customError = new ValidationError("Failed", error.details);
        res.status(422).json({ error: customError });
        return;
      }
      req.body.user = value;
      next();
    } catch (error) {
      res.status(422).send(error);
    }
  }
}

const dynamicValidationMiddlewareInstance = new DynamicValidationMiddleware();
export default dynamicValidationMiddlewareInstance.dynamicValidation.bind(
  dynamicValidationMiddlewareInstance,
);
