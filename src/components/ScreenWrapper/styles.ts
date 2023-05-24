import { primary, white } from '@constants/theme/colors'
import spacing from '@constants/theme/dimensions'
import fonts, { h2 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // @ts-ignore
  childrenContainer: (height: number) => ({
    minHeight: height
  }),
  container: {
    backgroundColor: white,
    flex: 1
  },
  largeHeaderContainer: {
    backgroundColor: primary
  },
  listContentContainerStyle: { backgroundColor: white, flexGrow: 1 },
  title: {
    color: white,
    fontSize: h2,
    fontWeight: fonts.regular
  }
})

export default styles
