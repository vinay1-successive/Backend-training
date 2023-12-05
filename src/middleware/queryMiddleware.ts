import { type Request, type Response, type NextFunction } from "express";
class ValidationError extends Error {
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.details = details;
  }
}
class QueryMiddleware {
  public queryMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    try {
      const value = req.query;
      if (!Number(value.name)) {
        const customError = new ValidationError("Failed", "Invalid Query");
        res.status(422).json({ error: customError });
        return;
      }
      console.dir(req);

      next();
    } catch (error) {
      res.status(422).send(error);
    }
  }
}

const queryMiddlewareInstance = new QueryMiddleware();
export default queryMiddlewareInstance.queryMiddleware.bind(
  queryMiddlewareInstance,
);
