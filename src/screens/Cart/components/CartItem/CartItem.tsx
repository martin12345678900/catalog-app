import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { ICartItem } from '@models/Cart.model'
import CartContext from '@store/CartStore'

import { error, success } from '@constants/theme/colors'
import styles from './styles'

interface ICartItemProps {
  product: ICartItem
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  const { addProduct, deleteProduct } = useContext(CartContext)

  const onPlusPress = () => {
    addProduct(product)
  }

  const onMinusPress = () => {
    deleteProduct(product.id)
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{product.title}</Text>
        <Text style={styles.categoryText}>{product.category}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.actionContainerText}>Price: {product.price}$</Text>
        <Text style={styles.actionContainerText}>
          Quantity: {product.quantity}
        </Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            accessibilityRole='button'
            onPress={onPlusPress}
            style={StyleSheet.flatten([
              styles.actionBtn,
              { backgroundColor: success }
            ])}>
            <Text style={styles.actionText}>+</Text>
          </Pressable>
          <Pressable
            accessibilityRole='button'
            onPress={onMinusPress}
            style={StyleSheet.flatten([
              styles.actionBtn,
              { backgroundColor: error }
            ])}>
            <Text style={styles.actionText}>-</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CartItem
