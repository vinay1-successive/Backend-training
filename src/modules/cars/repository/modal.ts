import mongoose from "mongoose";
import carSchema from "./schema";
import type ICar from "./Icar";

const CarModel = mongoose.model<ICar>("Car", carSchema);
export default CarModel;
