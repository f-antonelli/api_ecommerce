import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, require: true, default: 'user' },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

export default UserSchema;
