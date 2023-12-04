// import schema from "../utils/Schemas.js";

// import { Request, Response, NextFunction } from "express";
// const dynamicValidation = (req:Request, res:Response, next:NextFunction) => {
//   try {
//     const url = req.url.split("/")[1];
//     const user = req.body;
//     const validateFun = schema[url];
//     const { error, value } = validateFun.validate(user, { abortEarly: false });
//     if (error) {
//       throw error.details;
//     }
//     req.body.user = value;
//     next();
//   } catch (error) {
//     return res.status(422).send(error);
//   }
// };

// export default dynamicValidation;

import schema from "../utils/Schemas.js";
import { Request, Response, NextFunction } from "express";

class DynamicValidationMiddleware {
  public dynamicValidation(req: Request, res: Response, next: NextFunction): void {
    try {
      const url = req.url.split("/")[1];
      const user = req.body;
      const validateFun = schema[url];
      const { error, value } = validateFun.validate(user, { abortEarly: false });
      if (error) {
        throw error.details;
      }
      req.body.user = value;
      next();
    } catch (error) {
      res.status(422).send(error);
    }
  }
}

const dynamicValidationMiddlewareInstance = new DynamicValidationMiddleware();
export default dynamicValidationMiddlewareInstance.dynamicValidation.bind(dynamicValidationMiddlewareInstance);
