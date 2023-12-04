// import { Request, Response, NextFunction } from "express";
// const headerMiddleware = (Custom_Header: object) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     res.set(Custom_Header);
//     console.log(res.getHeaders());
//     next();
//   };
// };

// export default headerMiddleware;

import { Request, Response, NextFunction } from "express";

class HeaderMiddleware {
  private customHeader: object;

  constructor(customHeader: object) {
    this.customHeader = customHeader;
  }

  public headerMiddleware(req: Request, res: Response, next: NextFunction): void {
    res.set(this.customHeader);
    console.log(res.getHeaders());
    next();
  }
}

const customHeader = { CustomKey1: "CustomValue1" }; // Replace with your custom header
const headerMiddlewareInstance = new HeaderMiddleware(customHeader);
export default headerMiddlewareInstance.headerMiddleware.bind(headerMiddlewareInstance);
