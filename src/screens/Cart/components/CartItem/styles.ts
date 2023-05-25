import { primary, success, white } from '@constants/theme/colors'
import spacing from '@constants/theme/dimensions'
import fonts, { h3, h4, h5 } from '@constants/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  actionBtn: {
    alignItems: 'center',
    backgroundColor: success,
    borderRadius: 25 / 2,
    height: 25,
    justifyContent: 'center',
    marginHorizontal: spacing.xs,
    width: 25
  },
  actionContainerText: { fontSize: h5, fontWeight: fonts.regular },
  actionText: { color: white, fontSize: h3, fontWeight: fonts.bold },
  actionsContainer: {
    flex: 0.3,
    marginTop: spacing.s2
  },
  buttonsContainer: { flexDirection: 'row', marginTop: spacing.s2 },
  categoryText: { fontSize: h5, fontWeight: fonts.bold },
  container: {
    borderColor: primary,
    borderRadius: spacing.s1,
    borderWidth: 0.5,
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: spacing.s2,
    marginVertical: spacing.s1,
    padding: spacing.s1
  },
  image: { flex: 0.2, height: 100 },
  infoContainer: {
    flex: 0.5,
    marginHorizontal: spacing.s2,
    marginTop: spacing.s2
  },
  titleText: { fontSize: h4, fontWeight: fonts.regular }
})

export default styles
