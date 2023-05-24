import React, { useState } from 'react'
import { FlatList } from 'react-native'

import ScreenWrapper from '@components/ScreenWrapper'
import useCatalog from '@hooks/useCatalog'
import { IProduct } from '@models/Product.model'
import Loading from '@components/Loading'
import SearchBar from './components/SearchBar'
import Product from './components/Product'

import styles from './styles'

const Catalog = () => {
  const [query, setQuery] = useState('')
  const { products, loading } = useCatalog()

  const renderItem = ({ item }: { item: IProduct }) => <Product {...item} />

  if (loading) {
    return <Loading size='large' />
  }

  return (
    <ScreenWrapper title='Catalog'>
      <SearchBar value={query} onChange={setQuery} />
      <FlatList
        data={products}
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScreenWrapper>
  )
}

export default Catalog
