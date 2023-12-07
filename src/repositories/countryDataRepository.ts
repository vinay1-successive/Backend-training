import { type ICountry } from "../interface/Icountry.js";
import { CountryModel } from "../lib/database/country.js";
import BaseRepository from "./base.Repository.js";

class CountryDataRepository extends BaseRepository<ICountry> {
  constructor() {
    super(CountryModel);
  }

  saveData = async (countryData: any): Promise<void> => {
    await CountryModel.create(countryData);
  };

  getData = async (): Promise<ICountry[]> => {
    const data: ICountry[] = await CountryModel.find({});
    return data;
  };
}

export default CountryDataRepository;
