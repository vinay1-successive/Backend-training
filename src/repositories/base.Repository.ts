import type mongoose from "mongoose";

class BaseRepository<T> {
  private readonly modal: mongoose.Model<any>;
  constructor(modal: mongoose.Model<any>) {
    this.modal = modal;
  }

  getAllData = async (): Promise<T[]> => {
    const data = await this.modal.find({});
    return data;
  };

  deleteAllData = async (): Promise<void> => {
    await this.modal.deleteMany({});
  };

  updateById = async (id: string, newData: object): Promise<void> => {
    await this.modal.findByIdAndUpdate(id, newData);
  };

  getById = async (id: string): Promise<T[]> => {
    const data = await this.modal.findById(id);
    return data;
  };

  deleteById = async (id: string): Promise<void> => {
    await this.modal.findByIdAndDelete(id);
  };
}
export default BaseRepository;
