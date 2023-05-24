import React from 'react'
import { FlatList } from 'react-native'
import useCatalog from '@hooks/useCatalog'
import Loading from '@components/Loading'
import { IProduct } from '@models/Product.model'
import Product from '../Product/Product'

import styles from './styles'

interface IProductsProps {
  query: string
}

const Products: React.FC<IProductsProps> = ({ query }) => {
  const { products, loading } = useCatalog({ query })

  const renderItem = ({
    item: { title, image, price, id }
  }: {
    item: IProduct
  }) => <Product title={title} image={image} price={price} id={id} />

  if (loading) {
    return <Loading size='large' />
  }

  return (
    <FlatList
      data={products}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default Products
