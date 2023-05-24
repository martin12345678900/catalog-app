import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating-widget'

import Loading from '@components/Loading'
import ScreenWrapper from '@components/ScreenWrapper'
import useGetProduct from '@hooks/useGetProduct'

import styles from './styles'

interface IDetailsProps {
  route: {
    params: { id: number }
  }
}

const Details: React.FC<IDetailsProps> = ({
  route: {
    params: { id }
  }
}) => {
  const { loading, product } = useGetProduct({ id })

  if (loading) return <Loading size='large' />

  return (
    <ScreenWrapper renderBack title='Details'>
      <View style={styles.container}>
        <Image
          source={{ uri: product?.image }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.title}>
          {product?.title} ({product?.category})
        </Text>
        <StarRating
          maxStars={5}
          rating={product?.rating.rate as number}
          onChange={_ => null}
          animationConfig={{ scale: 1 }}
        />
        <Text style={styles.description}>{product?.description}</Text>
        <Text style={styles.priceText}>
          Price: {product?.price.toFixed(2)}$
        </Text>
        <TouchableOpacity accessibilityRole='button' style={styles.cartBtn}>
          <Text style={styles.addToCardText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default Details
