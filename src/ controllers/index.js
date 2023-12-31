import asyncDataFun from "./asyncDataController.js";
import { setUser } from "./authController.js";
import { getData, putData, getDataByParameter } from "./dataController.js";
import { login, register } from "./dynamicController.js";

export {
  setUser,
  getData,
  putData,
  getDataByParameter,
  login,
  register,
  asyncDataFun,
};
