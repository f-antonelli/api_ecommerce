import mongoose from 'mongoose';

import { UserDTO } from '../api/user/user.dto';

export interface UserDocument extends UserDTO, mongoose.Document {
  comparePassword(posiblePassword: string): Promise<Boolean>;
  createdAt: Date;
  updateAt: Date;
}
