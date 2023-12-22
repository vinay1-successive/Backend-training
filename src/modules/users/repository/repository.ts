import BaseRepository from "../../../lib/Base/base.repository";
import { type IgetById } from "../entities/IgetByIdQuery";
import { type IgetByName } from "../entities/IgetByNameQuery";
import { type IuserLogin } from "../entities/IuserLogin";
import { type IUser } from "./IUser";
import UserModel from "./modal";
import bcrypt from "bcrypt";
import { type Ierror } from "../entities/Ierror";
const salt: number = 10;
class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(UserModel);
  }

  register = async (user: IUser): Promise<IUser> => {
    try {
      const data: IUser | null = await UserModel.findOne({ email: user.email });
      if (data) {
        throw new Error("User with this email already exists");
      }
      user.password = bcrypt.hashSync(user.password, salt);
      const createdUser: IUser = await UserModel.create(user);
      return createdUser;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      throw error;
    }
  };

  getByName = async (query: IgetByName): Promise<IUser[]> => {
    return await UserModel.find({ name: query.name }).limit(
      !query.limit ? 0 : query.limit,
    );
  };

  getById = async (query: IgetById): Promise<IUser[]> => {
    return await UserModel.find({ id: query.id }).limit(
      !query.limit ? 0 : query.limit,
    );
  };

  login = async (user: IuserLogin): Promise<IUser | Ierror> => {
    try {
      const userData: IuserLogin = user;
      const findUser: IUser | null = await UserModel.findOne({
        email: userData.email,
      });
      if (!findUser) {
        throw new Error("Invalid Email");
      }
      const valid: boolean = bcrypt.compareSync(
        userData.password,
        findUser.password,
      );
      if (!valid) {
        throw new Error("Invalid Password");
      }

      return findUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default UserRepository;
