import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, require: true, default: 'user' },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export default UserSchema;
