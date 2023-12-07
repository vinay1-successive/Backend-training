import { type NextFunction, type Request, type Response } from "express";
import countryValidationSchmea from "../utils/countryValidationSchema.js";
class ValidationError extends Error {
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.details = details;
  }
}
class CountryValidationSchmea {
  public validate(req: Request, res: Response, next: NextFunction): void {
    try {
      const user = req.body;
      const { error } = countryValidationSchmea.validate(user, {
        abortEarly: false,
      });
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

const countryValidationMiddlewareInstance = new CountryValidationSchmea();
export default countryValidationMiddlewareInstance.validate.bind(
  countryValidationMiddlewareInstance,
);
