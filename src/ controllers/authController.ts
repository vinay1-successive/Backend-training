import jwt from "jsonwebtoken";
const secret = "Vinay@1234";

import { Request, Response } from "express";
const setUser = (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log(user);
    if (!Object.keys(user).length) {
      throw new Error();
    }
    const token = jwt.sign(user, secret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    return res.status(422).send("Unprocessable entry");
  }
};

export { setUser };
