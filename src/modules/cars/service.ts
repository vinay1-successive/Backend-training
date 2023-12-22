import { type IbaseQuery } from "./entities/IbaseQuery";
import { type IgetByName } from "./entities/IgetByName";
import type ICar from "./repository/Icar";
import CarRepository from "./repository/repository";

class CarService {
  private readonly carRepository: CarRepository;
  constructor() {
    this.carRepository = new CarRepository();
  }

  addCar = async (carData: ICar): Promise<ICar> => {
    return await this.carRepository.add(carData);
  };

  getAll = async (): Promise<ICar[]> => {
    return await this.carRepository.getAll();
  };

  getById = async (query: string): Promise<ICar[] | null> => {
    return await this.carRepository.getbyId(query);
  };

  getByName = async (query: IgetByName): Promise<ICar[] | null> => {
    return await this.carRepository.getByName(query);
  };

  deleteAll = async (): Promise<void> => {
    await this.carRepository.deleteAll();
  };

  updateById = async (
    query: string,
    newData: IbaseQuery,
  ): Promise<ICar | null> => {
    return await this.carRepository.updateById(query, newData);
  };

  deleteById = async (query: string): Promise<void> => {
    await this.carRepository.deleteById(query);
  };
}

export default CarService;
