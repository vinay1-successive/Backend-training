import { Request, Response, NextFunction } from "express";
const limit = 4;
let count = 0;
const window = 10;

const limitMiddleWare = (req:Request, res:Response, next:NextFunction) => {
  try {
    if (count >= limit) {
      throw new Error();
    } else {
      count++;
    }
    if (count === 1) {
      setTimeout(() => {
        count = 0;
      }, 1000 * window);
    }
    next();
  } catch (error) {
    return res.status(429).send("Too Many Requests");
  }
};

export default limitMiddleWare;
