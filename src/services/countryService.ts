import { type ICountry } from "../interface/Icountry.js";
import CountryDataRepository from "../repositories/countryDataRepository.js";

class CountryService {
  private readonly CountryDataRepository: CountryDataRepository;
  constructor() {
    this.CountryDataRepository = new CountryDataRepository();
  }

  createCountry = async (countryData: any): Promise<void> => {
    await this.CountryDataRepository.saveData(countryData);
  };

  getAllCountry = async (): Promise<ICountry[]> => {
    return await this.CountryDataRepository.getData();
  };

  updateCountryById = async (id: string, newData: object): Promise<void> => {
    await this.CountryDataRepository.updateById(id, newData);
  };
}

export default CountryService;
