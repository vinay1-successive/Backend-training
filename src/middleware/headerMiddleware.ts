import { type Request, type Response, type NextFunction } from "express";

class HeaderMiddleware {
  private readonly customHeader: object;

  constructor(customHeader: object) {
    this.customHeader = customHeader;
  }

  public headerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    res.set(this.customHeader);
    console.log(res.getHeaders());
    next();
  }
}

const customHeader = { CustomKey1: "CustomValue1" }; // Replace with your custom header
const headerMiddlewareInstance = new HeaderMiddleware(customHeader);
export default headerMiddlewareInstance.headerMiddleware.bind(
  headerMiddlewareInstance,
);
