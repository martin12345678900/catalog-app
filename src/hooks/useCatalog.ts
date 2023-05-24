import { useState, useEffect } from 'react'

import { IProduct } from '@models/Product.model'
import ProductsService from '@services/ProductsService'

const useCatalog = ({ query }: { query: string }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)

    const allProducts = await ProductsService.getAll()
    // Simulating real world example when we pass the query to query params on request
    // that's why i am making request on every query change waiting 300 milliseconds
    const filteredProducts = allProducts.filter(product => {
      const { title, category } = product
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase())
      )
    })
    setProducts(filteredProducts)
    setLoading(false)
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    timeout = setTimeout(() => {
      fetchProducts()
    }, 300)

    return function cleanup() {
      if (timeout) clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { products, loading }
}

export default useCatalog
