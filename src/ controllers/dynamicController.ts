// import { Request, Response } from "express";
// const login = (req: Request, res: Response) => {
//   res.send(`${req.body.user.username} Logged In`);
// };

// const register = (req: Request, res: Response) => {
//   res.send("User Registerd Successfully");
// };

// export { login, register };

import { Request, Response } from "express";
class DynamicController {
  public login(req: Request, res: Response): void {
    res.send(`${req.body.user.username} Logged In`);
  }
  public register(req: Request, res: Response): void {
    res.send("User Registerd Successfully");
  }
}

const dynamicControllerInstance = new DynamicController();
export default dynamicControllerInstance;
