import { type Response } from "express";

class SystemResponse {
  private readonly res: Response;
  private readonly message: string;
  private readonly data: object;

  constructor(res: Response, message: string, data: object) {
    this.res = res;
    this.message = message;
    this.data = data;
  }

  Ok = (): any => {
    this.res.status(200).json({
      status: true,
      message: this.message,
      data: this.data,
    });
  };

  error = (): any => {
    this.res.status(400).json({
      status: false,
      message: this.message,
      data: this.data,
    });
  };

  unauthorized = (): any => {
    this.res.status(401).json({
      status: false,
      message: this.message,
      data: this.data,
    });
  };

  token = (): any => {
    this.res.status(200).json({
      status: true,
      message: this.message,
      data: this.data,
    });
  };

  notFound = (): any => {
    this.res.status(403).json({
      status: false,
      message: this.message,
      data: this.data,
    });
  };
}

export default SystemResponse;
