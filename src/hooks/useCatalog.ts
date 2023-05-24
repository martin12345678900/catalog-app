import { useState, useEffect } from 'react'

import { IProduct } from '@models/Product.model'
import ProductsService from '@services/ProductsService'

const useCatalog = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)

    const allProducts = await ProductsService.getAll()
    setProducts(allProducts)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading }
}

export default useCatalog
