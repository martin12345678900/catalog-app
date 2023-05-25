import { ICartItem } from '@models/Cart.model'
import { ActionType, State, Actions } from './types'

export const initialState: State = {
  cart: {}
}

const Reducer = (state: State, action: ActionType) => {
  const { type, payload } = action

  switch (type) {
    case Actions.ADD_PRODUCT:
      const product = payload as ICartItem
      const item = state.cart[product.id as number]

      console.log('state.cart', state.cart)

      return {
        ...state,
        cart: {
          ...state.cart,
          [product.id as number]: item
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : {
                ...product,
                quantity: 1
              }
        }
      }
    case Actions.DELETE_PRODUCT:
      const productId = payload as number
      const selectedProduct = state.cart[productId]
      const updatedCart = { ...state.cart }

      if (selectedProduct.quantity === 1) {
        delete updatedCart[productId]
      } else {
        updatedCart[productId].quantity--
      }

      return {
        ...state,
        cart: updatedCart
      }
    default:
      return state
  }
}

export default Reducer
