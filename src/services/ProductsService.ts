import axios from 'axios'
import { ENDPOINTS } from '@constants/core/api'
import { IProduct, IProductResponse } from '@models/Product.model'
import callApi from './config/axiosUtils'

const getAll = async () => {
  const response = await callApi<IProductResponse[]>({
    url: ENDPOINTS.GET_PRODUCTS
  })

  if (axios.isAxiosError(response)) {
    return []
  } else {
    return response.map(parseProduct)
  }
}

const ProductsService = {
  getAll
}

const parseProduct = ({
  id,
  category,
  image,
  price,
  title
}: IProductResponse): IProduct => ({
  id,
  category,
  image,
  name: title,
  price: +price.toFixed(2)
})

export default ProductsService
