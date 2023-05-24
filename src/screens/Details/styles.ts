import { primary, white } from '@constants/theme/colors'
import spacing from '@constants/theme/dimensions'
import fonts, { h2, h3, h4 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  addToCardText: {
    color: white,
    fontSize: h4,
    fontWeight: fonts.regular,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  cartBtn: {
    backgroundColor: primary,
    borderRadius: spacing.s3,
    justifyContent: 'center',
    marginVertical: spacing.s3,
    padding: spacing.s2
  },
  container: {
    flex: 1,
    padding: spacing.s2
  },
  description: {
    fontSize: h4,
    fontWeight: fonts.regular,
    marginVertical: spacing.s2
  },
  image: {
    height: 300
  },
  priceText: {
    fontSize: h3,
    fontStyle: 'italic',
    fontWeight: fonts.bold
  },
  title: {
    fontSize: h2,
    fontWeight: fonts.bold,
    marginVertical: spacing.s2
  }
})

export default styles
