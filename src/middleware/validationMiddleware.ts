import { type NextFunction, type Request, type Response } from "express";
import userSchema from "../utils/userSchema";
class ValidationError extends Error {
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.details = details;
  }
}
class ValidationMiddleware {
  public validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const user = req.body;
      const { error } = userSchema.validate(user, { abortEarly: false });
      if (error) {
        const customError = new ValidationError("Failed", error.details);
        res.status(422).json({ error: customError });
        return;
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
