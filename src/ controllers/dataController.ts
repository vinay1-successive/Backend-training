import arr from "../utils/mockData.js";
import { Request, Response } from "express";
class DataController {
  public getData(req: Request, res: Response): void {
    try {
      res.json(arr);
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  }

  public getDataByParameter(req: Request, res: Response): void {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) res.status(401).json({ error: "Invalid Id" });
      res.json(req.params);
    } catch (error) {
      res.status(401).json({ error: "Data not received" });
    }
  }

  public putData(req: Request, res: Response): void {
    try {
      const newD = req.body;
      arr.push(newD);
      res.send(arr);
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  }
}

const dataControllerInstance=new DataController();
export default dataControllerInstance;