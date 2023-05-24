import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height

const spacing = {
  xss: 2,
  xs: 4,
  s1: 8,
  s2: 16,
  s3: 24,
  s4: 32
}

export default spacing
