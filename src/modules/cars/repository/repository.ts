import BaseRepository from "../../../lib/Base/base.repository";
import { type IbaseQuery } from "../entities/IbaseQuery";
import { type IgetByName } from "../entities/IgetByName";
import type ICar from "./Icar";
import CarModel from "./modal";

class CarRepository extends BaseRepository<ICar> {
  constructor() {
    super(CarModel);
  }

  add = async (car: ICar): Promise<ICar> => {
    try {
      console.log(car);

      const createdCar: ICar = await CarModel.create(car);
      console.log(createdCar);

      return createdCar;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateById = async (
    query: string,
    newData: IbaseQuery,
  ): Promise<ICar | null> => {
    try {
      const updatedCar: ICar | null = await CarModel.findByIdAndUpdate(
        query,
        newData,
      );
      if (updatedCar == null) {
        throw new Error("No Data Found!!");
      }
      console.log(updatedCar);

      return updatedCar;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getByName = async (query: IgetByName): Promise<ICar[] | null> => {
    console.log(query);
    const data: ICar[] = await CarModel.find({ model: query.model }).limit(
      !query.limit ? 0 : query.limit,
    );
    return data;
  };

  deleteById = async (query: string): Promise<void> => {
    try {
      await CarModel.findByIdAndDelete(query);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default CarRepository;
