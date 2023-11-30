import { Request, Response, NextFunction } from "express";
const headerMiddleware = (Custom_Header: object) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.set(Custom_Header);
    console.log(res.getHeaders());
    next();
  };
};

export default headerMiddleware;
