import spacing from '@constants/theme/dimensions'
import fonts, { h2, h3 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: h3,
    fontWeight: fonts.semiBold,
    paddingHorizontal: spacing.s1
  }
})

export default styles
