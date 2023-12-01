import { Request, Response } from "express";
const setData = (req: Request, res: Response) => {
  try {
    res.cookie("name", "Vinay").send("Done");
  } catch (error) {
    res.send(error);
  }
};
const checkData = (req: Request, res: Response) => {
  try {
    const value = req.cookies.name;
    if (!value) {
      throw new Error();
    }
    res.send(value);
  } catch (error) {
    return res.status(401).send("Cookie not set");
  }
};

export {setData,checkData};
