import jwt from "jsonwebtoken";
import { type Request, type Response } from "express";
class AuthController {
  private readonly secret: string;
  constructor(secret: string) {
    this.secret = secret;
  }

  public setUser(req: Request, res: Response): void {
    try {
      const user = req.body;
      console.log(user);
      if (!Object.keys(user).length) {
        throw new Error();
      }
      const token = jwt.sign(user, this.secret, { expiresIn: "1h" });
      res.json({ token });
    } catch (error) {
      res.status(422).send("Unprocessable entry");
    }
  }
}

const authControllerInstance = new AuthController("Vinay@1234");
export default authControllerInstance.setUser.bind(authControllerInstance);
