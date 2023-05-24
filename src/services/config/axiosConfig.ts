import axios, { AxiosError } from 'axios'

import { BASE_URL } from '@constants/core/api'

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json; charset=utf-8'
  }
})

http.interceptors.response.use(
  response => Promise.resolve(response),
  (error: AxiosError) => console.log('http error', error.toJSON())
)

export default http
