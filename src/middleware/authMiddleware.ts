// import jwt from "jsonwebtoken";
// const secret = "Vinay@1234";
// import { Request, Response, NextFunction } from "express";
// const authToken = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const bearer = req.headers["authorization"]?.split(" ")[0];
//     if (bearer !== "bearer") {
//       throw new Error();
//     }
//     const token = req.headers["authorization"]?.split(" ")[1];
//     const user = jwt.verify(token ?? "", secret);
//     req.body.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).send("Unauthorized");
//   }
// };

// export default authToken;

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class AuthTokenMiddleware {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  public authToken(req: Request, res: Response, next: NextFunction): void {
    try {
      const bearer = req.headers["authorization"]?.split(" ")[0];
      if (bearer !== "bearer") {
        throw new Error();
      }
      const token = req.headers["authorization"]?.split(" ")[1];
      const user = jwt.verify(token ?? "", "Vinay@1234");
      req.body.user = user;
      next();
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  }
}

const secret = "Vinay@1234";
const authTokenMiddlewareInstance = new AuthTokenMiddleware(secret);
export default authTokenMiddlewareInstance.authToken.bind(
  authTokenMiddlewareInstance
);
