// import arr from "../utils/mockData.js";
// import { Request,Response,NextFunction } from "express";
// async function wait(ms:number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }
// const asyncDataFun = async (req: Request, res: Response) => {
//   try {
//     const newD = req.body;
//     arr.push(newD);
//     await wait(3000);
//     // throw new Error()
//     res.json({arr})
//   } catch (error) {
//     return res.status(402).send("Something went wrong");
//   }
// };
// export default asyncDataFun;

import arr from "../utils/mockData.js";
import { Request, Response } from "express";
class AsyncDataController {
  private async wait(ms: number): Promise<void> {
    return new Promise((res) => {
      setTimeout(res, ms);
    });
  }

  public async asyncDataFun(req: Request, res: Response): Promise<void> {
    try {
      const newD = req.body;
      arr.push(newD);
      await this.wait(3000);
      // throw new Error()
      res.json({ arr });
    } catch (error) {
      res.status(402).send("Something went wrong");
    }
  }
}

const asyncDataControllerInstance = new AsyncDataController();
export default asyncDataControllerInstance.asyncDataFun.bind(
  asyncDataControllerInstance
);