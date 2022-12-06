import mongoose from 'mongoose';

import { UserDTO } from '../api/users/users.dto';

export interface UserDocument extends UserDTO, mongoose.Document {
  comparePassword(posiblePassword: string): Promise<Boolean>;
  createdAt: Date;
  updateAt: Date;
}
