import { error, primaryShade } from '@constants/theme/colors'
import fonts, { h6 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: error,
    borderRadius: 14 / 2,
    height: 14,
    justifyContent: 'center',
    position: 'absolute',
    right: -2.5,
    top: -2.5,
    width: 14,
    zIndex: 10000
  },
  badgeText: {
    color: primaryShade,
    fontSize: h6,
    fontWeight: fonts.semiBold,
    textAlign: 'center'
  },
  container: {
    flex: 1
  }
})

export default styles
