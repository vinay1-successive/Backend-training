import jwt from "jsonwebtoken";
import SystemResponse from "../../lib/responseHandler/systemResponse";
import { type Ierror } from "./entities/Ierror";
import { type IgetById } from "./entities/IgetByIdQuery";
import { type IgetByName } from "./entities/IgetByNameQuery";
import { type IuserLogin } from "./entities/IuserLogin";
import { type IUser } from "./repository/IUser";
import UserService from "./service";
import { type Request, type Response } from "express";

class UserController {
  public userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData: IUser = req.body;
      const createdUser: IUser = await this.userService.register(userData);
      new SystemResponse(res, "User Registerd Successfully", createdUser).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(
        res,
        "User Registration Failed",
        error.message,
      ).error();
    }
  };

  public getByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const query: IgetByName = req.body;
      const data: IUser[] = await this.userService.getbyName(query);
      new SystemResponse(res, "Success", data).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "No data Found", error.message).error();
    }
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const query: IgetById = req.body;
      const data: IUser[] | null = await this.userService.getById(query);
      new SystemResponse(res, "Success", [data]).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "No data Found", error.message).error();
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const query: IuserLogin = req.body;
      const data: IUser | Ierror = await this.userService.login(query);
      console.log(data);

      const token = jwt.sign({ data }, "Vinay@1234", { expiresIn: "10h" });
      new SystemResponse(res, "User Login Successfully", [
        data,
        { token },
      ]).Ok();
    } catch (error: any) {
      console.log(error);
      new SystemResponse(res, "No User Found", error.message).error();
    }
  };
}

export default UserController;
