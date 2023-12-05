import { type Request, type Response } from "express";
class CookieController {
  public setData = (req: Request, res: Response): void => {
    try {
      res.cookie("name", "Vinay").send("Done");
    } catch (error) {
      res.send(error);
    }
  };

  public checkData = (req: Request, res: Response): void => {
    try {
      const value = req.cookies.name;
      if (!value) {
        throw new Error();
      }
      res.send(value);
    } catch (error) {
      res.status(401).send("Cookie not set");
    }
  };
}

const cookieControllerInstance = new CookieController();
export default cookieControllerInstance;
