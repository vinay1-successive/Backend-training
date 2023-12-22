import jwt from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";
import SystemResponse from "../responseHandler/systemResponse";

class AuthTokenMiddleware {
  private readonly secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  public authToken(req: Request, res: Response, next: NextFunction): void {
    try {
      const bearer = req.headers.authorization?.split(" ")[0];
      if (bearer !== "bearer") {
        throw new Error("Invalid Token!!");
      }
      const token = req.headers.authorization?.split(" ")[1];
      const user = jwt.verify(token ?? "", "Vinay@1234");
      req.body.user = { ...req.body, user };
      next();
    } catch (error: any) {
      new SystemResponse(res, "Unauthorized", error.message).unauthorized();
    }
  }
}

const secret = "Vinay@1234";
const authTokenMiddlewareInstance = new AuthTokenMiddleware(secret);
export default authTokenMiddlewareInstance.authToken.bind(
  authTokenMiddlewareInstance,
);
