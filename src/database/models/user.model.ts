import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import { UserDocument } from '../../interfaces';

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, default: 'user' },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function _(next) {
  const user = this as UserDocument;

  if (!user.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(+process.env.SALT!);

  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function _(posiblePassword: string): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(posiblePassword, user.password).catch(() => false);
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
