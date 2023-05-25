import spacing from '@constants/theme/dimensions'
import fonts, { h1, h2, h3 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingText: {
    fontSize: h2,
    fontWeight: fonts.bold,
    padding: spacing.s2
  },
  totalPriceText: {
    fontSize: h3,
    fontWeight: fonts.bold,
    margin: spacing.s2
  }
})

export default styles
