import { useEffect, useState } from 'react'
import { IProduct } from '@models/Product.model'
import ProductsService from '@services/ProductsService'

const useGetProduct = ({ id }: { id: number }) => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<IProduct | null>(null)

  const fetchProduct = async () => {
    setLoading(true)

    const oneProduct = await ProductsService.getOne(id)
    setProduct(oneProduct)
    setLoading(false)
  }

  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return { product, loading }
}

export default useGetProduct
