import { AxiosRequestHeaders, AxiosError } from 'axios'
import { Methods } from '@constants/core/api'
import http from './axiosConfig'

interface ICallApi<T> {
  method?: Methods
  url: string
  headers?: AxiosRequestHeaders
  data?: T
}

const callApi = async <R, T = never>({
  method = Methods.GET,
  url,
  headers,
  data
}: ICallApi<T>) => {
  try {
    const response = await http.request<R>({
      method,
      url,
      data,
      headers
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.log('err', err)
    return err
  }
}

export default callApi
