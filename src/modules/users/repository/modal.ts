import mongoose from "mongoose";
import { type IUser } from "./IUser";
import userSchema from "./schema";

const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;
