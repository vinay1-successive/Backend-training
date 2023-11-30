import { Request, Response, NextFunction } from "express";
const parameterMiddleware = (req:Request, res:Response, next:NextFunction) => {

  next();
};

export default parameterMiddleware