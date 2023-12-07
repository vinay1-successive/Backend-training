import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  country: { type: String },
  captain: { type: String },
  playersName: [
    {
      type: String,
    },
  ],
});

const CountryModel = mongoose.model("Country", countrySchema);
export default CountryModel;
