import React from 'react'
import {
  View,
  ActivityIndicator as NativeActivityIndicator
} from 'react-native'
import { primary } from '@constants/theme/colors'
import styles from './styles'

interface ILoadingProps {
  size?: 'small' | 'large' | number
  color?: string
}

const Loading: React.FC<ILoadingProps> = ({
  size = 'small',
  color = primary
}) => (
  <View style={styles.container}>
    <NativeActivityIndicator size={size} color={color} hidesWhenStopped />
  </View>
)

export default Loading
