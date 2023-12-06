import jwt from "jsonwebtoken";
import configuration from "../config/config.js";
import { Request, Response, NextFunction } from "express";
const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers["authorization"]?.split(" ")[0];
    if (bearer !== "bearer") {
      throw new Error();
    }
    const token = req.headers["authorization"]?.split(" ")[1];
    const user = jwt.verify(token ?? "", configuration.secret);
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

export { authToken };
