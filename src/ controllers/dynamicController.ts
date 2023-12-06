import { Request, Response } from "express";
const login = (req: Request, res: Response) => {
  res.send(`${req.body.user.username} Logged In`);
};

const register = (req: Request, res: Response) => {
  res.send("User Registerd Successfully");
};

export { login, register };
