import React, { useState } from 'react'

import ScreenWrapper from '@components/ScreenWrapper'
import ShoppingCartButton from '@components/ShoppingCartButton'

import SearchBar from './components/SearchBar'
import Products from './components/Products'

const Catalog = () => {
  const [query, setQuery] = useState('')

  const headerRight = () => <ShoppingCartButton />

  return (
    <ScreenWrapper title='Catalog' headerRight={headerRight}>
      <SearchBar value={query} onChange={setQuery} />
      <Products query={query} />
    </ScreenWrapper>
  )
}

export default Catalog
