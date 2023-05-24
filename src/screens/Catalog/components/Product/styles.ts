import { primary, white } from '@constants/theme/colors'
import spacing from '@constants/theme/dimensions'
import fonts, { h4, h5, h6 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: white,
    borderColor: primary,
    borderRadius: spacing.s1,
    borderWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: spacing.s1
  },
  container: {
    marginBottom: spacing.s2
  },
  details: { flex: 0.75, marginLeft: spacing.s1 },
  image: { flex: 0.25, height: 75 },
  label: { fontSize: h5, fontWeight: fonts.bold },
  text: { fontSize: h5, fontWeight: fonts.regular }
})

export default styles
