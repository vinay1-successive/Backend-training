import type mongoose from "mongoose";
import { type ObjectId } from "mongoose";

class BaseRepository<T> {
  private readonly model: mongoose.Model<any>;
  constructor(model: mongoose.Model<any>) {
    this.model = model;
  }

  getAll = async (): Promise<T[]> => {
    const data: T[] = await this.model.find({});
    return data;
  };

  getbyId = async (query: string | ObjectId): Promise<T[] | null> => {
    const data: T[] | null = await this.model.findById(query);
    return data;
  };

  deleteAll = async (): Promise<void> => {
    await this.model.deleteMany({});
  };
}
export default BaseRepository;
