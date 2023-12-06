import { Request, Response, NextFunction } from "express";

const queryMiddleware = (req:Request, res:Response, next:NextFunction) => {
  try {
    const value = req.query;
    if (!Number(value.name)) {
      throw "Invalid Query!";
    }
    console.dir(req);
    
    
    next();
  } catch (error) {
    return res.status(422).send(error);
  }
};

export default queryMiddleware;
