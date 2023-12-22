import { type Ierror } from "./entities/Ierror";
import { type IgetById } from "./entities/IgetByIdQuery";
import { type IgetByName } from "./entities/IgetByNameQuery";
import { type IuserLogin } from "./entities/IuserLogin";
import { type IUser } from "./repository/IUser";
import UserRepository from "./repository/repository";

class UserService {
  private readonly userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  register = async (userData: IUser): Promise<IUser> => {
    return await this.userRepository.register(userData);
  };

  getbyName = async (query: IgetByName): Promise<IUser[]> => {
    return await this.userRepository.getByName(query);
  };

  getById = async (query: IgetById): Promise<IUser[] | null> => {
    return await this.userRepository.getById(query);
  };

  login = async (query: IuserLogin): Promise<IUser | Ierror> => {
    return await this.userRepository.login(query);
  };
}

export default UserService;
