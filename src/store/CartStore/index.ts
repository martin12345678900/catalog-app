import { ICartItem } from '@models/Cart.model'
import { createContext } from 'react'

interface ICartContext {
  cart: {
    [key in string]: ICartItem
  }
  addProduct: (product: ICartItem) => void | null
  deleteProduct: (id: number) => void | null
}

const CartContext = createContext<ICartContext>({
  cart: {},
  addProduct: _ => null,
  deleteProduct: _ => null
})

export default CartContext
