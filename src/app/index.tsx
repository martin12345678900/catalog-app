import React from 'react'
import Navigator from '@navigator'
import CartProvider from '@store/CartStore/Provider'

const App = () => (
  <CartProvider>
    <Navigator />
  </CartProvider>
)

export default App
