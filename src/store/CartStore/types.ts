import { ICartItem } from '@models/Cart.model'

export interface State {
  cart: {
    [key in string]: ICartItem
  }
}

export enum Actions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
}

interface AddProductAction {
  type: Actions
  payload: ICartItem
}

interface DeleteProductAction {
  type: Actions
  payload: number
}

export type ActionType = AddProductAction | DeleteProductAction
