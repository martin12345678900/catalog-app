import axios from 'axios'
import { ENDPOINTS } from '@constants/core/api'
import { IProduct } from '@models/Product.model'
import callApi from './config/axiosUtils'

const getAll = async () => {
  const response = await callApi<IProduct[]>({
    url: ENDPOINTS.GET_PRODUCTS
  })

  if (axios.isAxiosError(response)) {
    return []
  } else {
    return response
  }
}

const getOne = async (id: number) => {
  const response = await callApi<IProduct>({
    url: ENDPOINTS.GET_ONE_PRODUCT(id)
  })

  if (axios.isAxiosError(response)) {
    return null
  } else {
    return response
  }
}

const ProductsService = {
  getAll,
  getOne
}

export default ProductsService
