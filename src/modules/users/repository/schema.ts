import mongoose from "mongoose";
import { type IUser } from "./IUser";

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  phone: { type: String, required: true },
});

export default userSchema;
