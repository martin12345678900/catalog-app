import React, { useMemo, useReducer } from 'react'
import { ICartItem } from '@models/Cart.model'
import Reducer, { initialState } from './Reducer'
import CartContext from '.'
import { Actions } from './types'

interface ICartProviderProps {
  children: React.ReactNode
}

const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const addProduct = (product: ICartItem) => {
    dispatch({
      type: Actions.ADD_PRODUCT,
      payload: product
    })
  }

  const deleteProduct = (id: number) => {
    dispatch({
      type: Actions.DELETE_PRODUCT,
      payload: id
    })
  }

  const value = useMemo(
    () => ({
      ...state,
      addProduct,
      deleteProduct
    }),
    [state]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
