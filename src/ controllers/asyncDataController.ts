import arr from "../utils/mockData.js";
import { Request, Response, NextFunction } from "express";
async function wait(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
const asyncDataFun = async (req: Request, res: Response) => {
  try {
    const newD = req.body;
    arr.push(newD);
    await wait(3000);
    // throw new Error()
    res.json({ arr });
  } catch (error) {
    return res.status(402).send("Something went wrong");
  }
};
export default asyncDataFun;