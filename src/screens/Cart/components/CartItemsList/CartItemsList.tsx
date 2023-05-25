import React, { useContext } from 'react'
import CartContext from '@store/CartStore'
import { FlatList, Text } from 'react-native'
import { ICartItem } from '@models/Cart.model'
import CartItem from '../CartItem/CartItem'

const CartItemsList = () => {
  const { cart } = useContext(CartContext)

  const renderItem = ({ item }: { item: ICartItem }) => (
    <CartItem product={item} />
  )

  return (
    <FlatList
      data={Object.values(cart)}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  )
}

export default CartItemsList
