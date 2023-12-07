import { type Request, type Response } from "express";
class HealthCheckController {
  public check(req: Request, res: Response): void {
    try {
      res.send("Ok");
    } catch (error) {
      res.send(error);
    }
  }
}

const healthCheckControllerInstance = new HealthCheckController();
export default healthCheckControllerInstance.check.bind(
  healthCheckControllerInstance,
);
