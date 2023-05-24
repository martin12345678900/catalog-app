export const BASE_URL = 'https://fakestoreapi.com'

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export const METHODS = {
  GET: Methods.GET,
  POST: Methods.POST,
  PATCH: Methods.PATCH,
  PUT: Methods.PUT,
  DELETE: Methods.DELETE
}

export const ENDPOINTS = {
  GET_PRODUCTS: '/products',
  GET_ONE_PRODUCT: (id: number) => `/products/${id.toString()}`
}
