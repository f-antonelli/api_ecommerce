import mongoose from 'mongoose';

export interface User {
  email: string;
  username: string;
  password: string;
  role: string;
}

export interface UserDocument extends User, mongoose.Document {
  comparePassword(posiblePassword: string): Promise<Boolean>;
  createdAt: Date;
  updateAt: Date;
}
