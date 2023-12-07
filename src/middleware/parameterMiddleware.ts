import { type Request, type Response, type NextFunction } from "express";

class ParameterMiddleware {
  public parameterMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    console.log(req.params);

    next();
  }
}

const parameterMiddlewareInstance = new ParameterMiddleware();
export default parameterMiddlewareInstance.parameterMiddleware.bind(
  parameterMiddlewareInstance,
);
