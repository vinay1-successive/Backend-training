// import { Request, Response, NextFunction } from "express";
// const parameterMiddleware = (req:Request, res:Response, next:NextFunction) => {

//   next();
// };

// export default parameterMiddleware

import { Request, Response, NextFunction } from "express";

class ParameterMiddleware {
  public parameterMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.log(req.params);

    next();
  }
}

const parameterMiddlewareInstance = new ParameterMiddleware();
export default parameterMiddlewareInstance.parameterMiddleware.bind(
  parameterMiddlewareInstance
);
