import CartModel from '../../database/models/cart.model';

export function createCart(data: string) {
  return CartModel.create({ userId: data });
}
