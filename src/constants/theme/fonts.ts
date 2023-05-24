export const h1 = 34
export const h2 = 24
export const h3 = 17
export const h4 = 15
export const h5 = 13
export const h6 = 11
export const h7 = 9
export const h8 = 7

type Font =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type FontType = 'regular' | 'bold' | 'semiBold'

const fonts: {
  [key in FontType]: Font
} = {
  regular: 'normal',
  bold: 'bold',
  semiBold: '500'
}

export default fonts
