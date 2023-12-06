import { Request, Response, NextFunction } from "express";
const locationMiddleware = (req:Request, res:Response, next:NextFunction) => {
  try {
    if (req.ip !== "::1") {
      throw new Error();
    }
    console.log("Correct IP!!");
    next();
  } catch (error) {
    res.status(403).send("Forrbidden");
  }
};

export default locationMiddleware;
