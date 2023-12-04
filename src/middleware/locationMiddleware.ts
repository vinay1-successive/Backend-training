import { Request, Response, NextFunction } from "express";

class LocationMiddleware {
  public locationMiddleware(req: Request, res: Response, next: NextFunction): void {
    try {
      if (req.ip !== "::1") {
        throw new Error();
      }
      console.log("Correct IP!!");
      next();
    } catch (error) {
      res.status(403).send("Forbidden");
    }
  }
}

const locationMiddlewareInstance = new LocationMiddleware();
export default locationMiddlewareInstance.locationMiddleware.bind(locationMiddlewareInstance);
