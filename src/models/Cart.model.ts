import { IProduct } from './Product.model'

export interface ICartItem extends IProduct {
  quantity: number
}
