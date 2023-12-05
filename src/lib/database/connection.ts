import mongoose from "mongoose";
import { CountryModel, countriesData } from "./country.js";

class DatabaseConnection {
  public async setupDB(): Promise<void> {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/countries");
      console.log("Successfull");
      this.seedData();
    } catch (error) {
      console.log("Unsuccessfull");
    }
  }

  public async seedData(): Promise<void> {
    try {
      await CountryModel.deleteMany({});
      await CountryModel.insertMany(countriesData);
      console.log("Data Seeded Succesfully!!");
    } catch (error) {
      console.log("Seeding Unsccessfull!!");
    }
  }
}


export default DatabaseConnection;
