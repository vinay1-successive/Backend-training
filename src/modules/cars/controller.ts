import SystemResponse from "../../lib/responseHandler/systemResponse";
import { type IgetByName } from "./entities/IgetByName";
import type ICar from "./repository/Icar";
import CarService from "./service";
import { type Request, type Response } from "express";
class CarController {
  public carService: CarService;
  constructor() {
    this.carService = new CarService();
  }

  public addCar = async (req: Request, res: Response): Promise<void> => {
    try {
      const carData: ICar = req.body;

      const createdCar: ICar = await this.carService.addCar(carData);
      new SystemResponse(res, "Car Add Successfully", createdCar).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Failed to add car!!!", error.message).error();
    }
  };

  public getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.carService.getAll();
      new SystemResponse(res, "All Cars Data", data).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Failed to fetch data!!!", error.message).error();
    }
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const data = await this.carService.getById(id);
      if (data === null) {
        throw new Error("Not Found!!!");
      }
      new SystemResponse(res, `All Cars Data with id ${id}`, data).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Failed to fetch data!!!", error.message).error();
    }
  };

  public getByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const query: IgetByName = req.body;
      const data = await this.carService.getByName(query);
      if (data === null) {
        throw new Error("Not Found!!!");
      }
      new SystemResponse(res, `All Cars Data named ${query.model}`, data).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Failed to fetch data!!!", error.message).error();
    }
  };

  public deleteAll = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.carService.deleteAll();
      new SystemResponse(res, "All Data Deleted!!", []).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Cannot Delete Data!!!", error.message).error();
    }
  };

  public updateById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const newData = req.body;
      const data = await this.carService.updateById(id, newData);
      new SystemResponse(res, "Car Updated Successfully!!", { data }).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Cannot Update Data!!!", error.message).error();
    }
  };

  public deleteById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await this.carService.deleteById(id);
      new SystemResponse(res, "All Data Deleted!!", []).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "Cannot Delete Data!!!", error.message).error();
    }
  };
}
export default CarController;
