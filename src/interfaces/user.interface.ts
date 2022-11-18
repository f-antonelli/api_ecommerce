import mongoose from 'mongoose';

export interface UserInput {
  email: string;
  username: string;
  password: string;
  role: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  comparePassword(posiblePassword: string): Promise<Boolean>;
  createdAt: Date;
  updateAt: Date;
}
