import React from 'react'
import { Text } from 'react-native'

interface IProductProps {
  name: string
  image: string
  price: number
  category: string
}

const Product: React.FC<IProductProps> = ({ name, image, price, category }) => {
  const test = 'test'

  return <Text>{name}</Text>
}

export default Product
