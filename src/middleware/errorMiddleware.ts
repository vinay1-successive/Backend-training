import { Request, Response, NextFunction } from "express";
const errorHandler = (err: any, req:Request, res:Response, next:NextFunction) => {
  if (!err) {
    res.status(503).send("Service Unavailable");
  }

  res.status(err.status).send(err.message);
};
export default errorHandler;
