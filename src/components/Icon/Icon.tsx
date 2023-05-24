import React from 'react'
import { View, StyleSheet } from 'react-native'

import icons from '@constants/theme/icons.json'
import SVG from '@components/Icon/SVG'

// import { DEFAULT_ICON_PROPS_SIZE } from '@constants/theme/dimensions'
import styles from './styles'

export interface IconProps {
  name: string
  color?: string
  size?: number
  width?: number
  height?: number
  style?: object
  onPress?: () => void
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size,
  width,
  height,
  style,
  onPress
}) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <SVG
      // @ts-ignore
      data={icons[name]}
      style={{
        color,
        width: width ?? size,
        height: height ?? size,
        ...styles.svgContainer
      }}
      onPress={onPress}
    />
  </View>
)

export default Icon
