import CountryService from "../services/countryService";
import { type Request, type Response } from "express";
class CountryController {
  public countryService: CountryService;
  constructor() {
    this.countryService = new CountryService();
  }

  public addData = async (req: Request, res: Response): Promise<void> => {
    const countryData = req.body;
    await this.countryService.createCountry(countryData);
    res.status(201).json("Data is Added");
  };

  public getAllData = async (req: Request, res: Response): Promise<void> => {
    const savedCountry = await this.countryService.getAllCountry();
    console.log(savedCountry);
    res.status(201).json(savedCountry);
  };

  public updateById = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.body.id;
    const newData: object = req.body.data;
    await this.countryService.updateCountryById(id, newData);
    res.json("Data is Updated");
  };
}

const countryControllerInstance = new CountryController();
export default countryControllerInstance;
