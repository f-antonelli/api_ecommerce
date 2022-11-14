import mongoose, { Schema } from 'mongoose';

import HttpError from '../helpers/http-errors';
import { UpdateData } from '../interfaces';

export class MongoDB {
  private model;

  constructor(collection: string, schema: Schema) {
    this.model = mongoose.model(collection, schema);
  }

  create = async (data: unknown) => {
    try {
      const result = await this.model.create(data);

      return result;
    } catch (err) {
      const error = new HttpError('Could not create, please try again.', 500);

      return error;
    }
  };

  getAll = async () => {
    try {
      const data = await this.model.find();

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  getById = async (value: string) => {
    const id = new mongoose.Types.ObjectId(value);
    try {
      const data = await this.model.findOne(id);
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  getBy = async (value: string, data: string) => {
    try {
      const res = await this.model.findOne({ [value]: data });

      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  updateById = async (data: UpdateData, value: string) => {
    const id = new mongoose.Types.ObjectId(value);
    try {
      await this.model.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
      console.log(err);
    }
  };
}
