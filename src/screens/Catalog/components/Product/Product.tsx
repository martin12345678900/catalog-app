import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import routes from '@constants/core/routes'
import { NavigationProps } from '@constants/types/navigation'
import styles from './styles'

interface IProductProps {
  title: string
  image: string
  id: number
  price: number
}

const Product: React.FC<IProductProps> = ({ title, image, price, id }) => {
  const navigation = useNavigation<NavigationProps>()

  const navigateToDetails = () => {
    navigation.navigate(routes.Details, { id })
  }

  return (
    <Pressable
      style={styles.container}
      onPress={navigateToDetails}
      accessibilityRole='link'>
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode='contain'
        />
        <View style={styles.details}>
          <Text style={styles.text}>
            <Text style={styles.label}>Name:</Text> {title}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Price:</Text> {price.toFixed(2)}$
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Product
