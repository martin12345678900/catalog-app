import React, { useState } from 'react'

import ScreenWrapper from '@components/ScreenWrapper'

import SearchBar from './components/SearchBar'
import Products from './components/Products/Products'

const Catalog = () => {
  const [query, setQuery] = useState('')

  return (
    <ScreenWrapper title='Catalog'>
      <SearchBar value={query} onChange={setQuery} />
      <Products query={query} />
    </ScreenWrapper>
  )
}

export default Catalog
