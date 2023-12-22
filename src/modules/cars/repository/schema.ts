import mongoose from "mongoose";
import type ICar from "./Icar";

const carSchema = new mongoose.Schema<ICar>({
  brand: { type: String, requried: true },
  model: { type: String, requried: true },
  year: { type: Number, requried: true },
  color: { type: String, requried: true },
  fuelType: { type: String, requried: true },
  transmission: { type: String, required: true },
  forSale: { type: Boolean, required: true },
  engine: {
    type: { type: String, required: true },
    displacement: { type: Number, required: true },
    horsepower: { type: Number, required: true },
  },
  features: [String],
  owners: [
    {
      name: { type: String },
      contact: { type: String },
      purchaseDate: { type: String },
    },
  ],
  registration: {
    plateNumber: { type: String, required: true },
    state: { type: String, required: true },
    expiryDate: { type: String, required: true },
  },
  imageUrl: { type: String },
});

export default carSchema;
