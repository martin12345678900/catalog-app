import React, { useContext, useMemo } from 'react'
import { Text, View } from 'react-native'

import ScreenWrapper from '@components/ScreenWrapper'
import CartContext from '@store/CartStore'

import styles from './styles'
import CartItemsList from './components/CartItemsList'

const Cart = () => {
  const { cart } = useContext(CartContext)

  const totalPrice = useMemo(
    () =>
      Object.values(cart).reduce((acc, value) => {
        const { price, quantity } = value
        return (acc += price * quantity)
      }, 0),
    [cart]
  )

  return (
    <ScreenWrapper title='Cart' renderBack>
      <View style={styles.container}>
        <Text style={styles.headingText}>Cart</Text>
        <CartItemsList />
        <Text style={styles.totalPriceText}>
          Total price: {totalPrice.toFixed(2)}$
        </Text>
      </View>
    </ScreenWrapper>
  )
}

export default Cart
