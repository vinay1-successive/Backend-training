// import { Request, Response, NextFunction } from "express";
// const limit = 4;
// let count = 0;
// const window = 10;

// const limitMiddleWare = (req:Request, res:Response, next:NextFunction) => {
//   try {
//     if (count >= limit) {
//       throw new Error();
//     } else {
//       count++;
//     }
//     if (count === 1) {
//       setTimeout(() => {
//         count = 0;
//       }, 1000 * window);
//     }
//     next();
//   } catch (error) {
//     return res.status(429).send("Too Many Requests");
//   }
// };

// export default limitMiddleWare;

import { Request, Response, NextFunction } from "express";

class LimitMiddleware {
  private limit: number;
  private count: number;
  private window: number;

  constructor(limit: number, window: number) {
    this.limit = limit;
    this.count = 0;
    this.window = window;
  }

  public limitMiddleware(req: Request, res: Response, next: NextFunction): void {
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
export default limitMiddlewareInstance.limitMiddleware.bind(limitMiddlewareInstance);
