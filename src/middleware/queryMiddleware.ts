// import { Request, Response, NextFunction } from "express";

// const queryMiddleware = (req:Request, res:Response, next:NextFunction) => {
//   try {
//     const value = req.query;
//     if (!Number(value.name)) {
//       throw "Invalid Query!";
//     }
//     console.dir(req);
    
    
//     next();
//   } catch (error) {
//     return res.status(422).send(error);
//   }
// };

// export default queryMiddleware;

import { Request, Response, NextFunction } from "express";

class QueryMiddleware {
  public queryMiddleware(req: Request, res: Response, next: NextFunction): void {
    try {
      const value = req.query;
      if (!Number(value.name)) {
        throw "Invalid Query!";
      }
      console.dir(req);

      next();
    } catch (error) {
      res.status(422).send(error);
    }
  }
}

const queryMiddlewareInstance = new QueryMiddleware();
export default queryMiddlewareInstance.queryMiddleware.bind(queryMiddlewareInstance);