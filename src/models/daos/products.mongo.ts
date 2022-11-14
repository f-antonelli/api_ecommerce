import { MongoDB } from '../mongo-db';
import ProductSchema from '../product';

class DAOMongoDB extends MongoDB {
  constructor() {
    super('products', ProductSchema);
  }
}

export default DAOMongoDB;
