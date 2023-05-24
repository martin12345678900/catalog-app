import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  svgContainer: {
    ...Platform.select({
      android: {
        marginTop: 1
      }
    })
  }
})

export default styles
