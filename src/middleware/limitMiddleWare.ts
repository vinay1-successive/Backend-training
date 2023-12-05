import { type Request, type Response, type NextFunction } from "express";

class LimitMiddleware {
  private readonly limit: number;
  private count: number;
  private readonly window: number;

  constructor(limit: number, window: number) {
    this.limit = limit;
    this.count = 0;
    this.window = window;
  }

  public limitMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    try {
      if (this.count >= this.limit) {
        throw new Error();
      } else {
        this.count++;
      }
      if (this.count === 1) {
        setTimeout(() => {
          this.count = 0;
        }, 1000 * this.window);
      }
      next();
    } catch (error) {
      res.status(429).send("Too Many Requests");
    }
  }
}

const limitMiddlewareInstance = new LimitMiddleware(4, 10);
export default limitMiddlewareInstance.limitMiddleware.bind(
  limitMiddlewareInstance,
);
