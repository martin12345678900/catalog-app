import React, { useContext, useMemo } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { NavigationProps } from '@constants/types/navigation'
import Icon from '@components/Icon'
import routes from '@constants/core/routes'
import Icons from '@constants/icons'
import { white } from '@constants/theme/colors'

import CartContext from '@store/CartStore'
import styles from './styles'

const Badge = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.badge}>{children}</View>
)

const ShoppingCartButton = () => {
  const navigation = useNavigation<NavigationProps>()
  const { cart } = useContext(CartContext)

  const totalItems = useMemo(
    () =>
      Object.values(cart).reduce((acc, value) => {
        const { quantity } = value
        return (acc += quantity)
      }, 0),
    [cart]
  )

  const navigateToCart = () => navigation.navigate(routes.Cart)

  return (
    <TouchableOpacity accessibilityRole='button' onPress={navigateToCart}>
      <View style={styles.container}>
        <Icon name={Icons.cart} size={25} color={white} />
        <Badge>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </Badge>
      </View>
    </TouchableOpacity>
  )
}

export default ShoppingCartButton
