import mongoose, { type Schema } from "mongoose";
import { type ICountry } from "../../interface/Icountry.js";

const countrySchema: Schema<ICountry> = new mongoose.Schema({
  country: { type: String },
  captain: { type: String },
  playersName: [
    {
      type: String,
    },
  ],
});

const countriesData = [
  {
    country: "India",
    captain: "Rohit",
    playersName: [
      "Rohit Sharma (Captain)",
      "Hardik Pandya",
      "Shubman Gill",
      "Virat Kohli",
      "Shreyas Iyer",
      "KL Rahul",
      "Ravindra Jadeja",
      "Shardul Thakur",
      "Jasprit Bumrah",
      "Mohammed Siraj",
      "Kuldeep Yadav",
      "Mohammed Shami",
      "Ravichandran Ashwin",
      "Ishan Kishan",
      "Suryakumar Yadav",
    ],
  },
  {
    country: "Australia",
    captain: "Cummins",
    playersName: [
      "Pat Cummins (Captain)",
      "Steve Smith",
      "Alex Carey",
      "Josh Inglis",
      "Sean Abbot",
      "Marnus Labuschagne",
      "Cameron Green",
      "Josh Hazlewood",
      "Travis Head",
      "Mitch Marsh",
      "Glenn Maxwell",
      "Marcus Stoinis",
      "David Warner",
      "Adam Zampa",
      "Mitchell Starc",
    ],
  },
];

const CountryModel = mongoose.model<ICountry>("Country", countrySchema);
export { CountryModel, countriesData };
