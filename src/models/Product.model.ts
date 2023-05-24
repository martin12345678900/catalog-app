export interface IProduct {
  id: number
  name: string
  image: string
  price: number
  category: string
}

export interface IProductResponse {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}
