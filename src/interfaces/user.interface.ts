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

// export interface UserLogin {
//   email: string;
//   password: string;
// }

// export interface UserCreate {
//   username: string;
//   role: string;
//   email: string;
//   password: string;
// }

// export interface UserMongo {
//   _id: ObjectId;
//   username: string;
//   email: string;
//   role: string;
//   password: string;
//   createdAt: object;
//   updatedAt: object;
//   __v?: number;
// }
