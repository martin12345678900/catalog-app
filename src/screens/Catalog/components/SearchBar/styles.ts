import { primary } from '@constants/theme/colors'
import spacing from '@constants/theme/dimensions'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.s1,
    borderWidth: 0.5,
    color: primary,
    margin: spacing.s2,
    padding: spacing.s2
  }
})

export default styles
