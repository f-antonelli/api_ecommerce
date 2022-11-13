import { MongoDB } from '../mongo-db';
import UserSchema from '../user';

class DAOMongoDB extends MongoDB {
  constructor() {
    super('users', UserSchema);
  }
}

export default DAOMongoDB;
