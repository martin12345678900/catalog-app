import React, { useEffect } from 'react'
import Back from '@components/Back'
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_HEIGHT } from '@constants/theme/dimensions'
import styles from './styles'

interface IScreenWrapperProps {
  children: React.ReactNode
  title: string
  renderBack?: boolean
  headerRight?: () => React.ReactNode
  headerTitle?: () => React.ReactNode
}

interface ItemProp {
  title: string
}

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({
  children,
  title,
  renderBack = false,
  headerRight,
  headerTitle
}) => {
  const navigation = useNavigation()
  const [rowHeight, setRowHeight] = React.useState(SCREEN_HEIGHT)

  const headerLeft = () => {
    if (renderBack) {
      return <Back />
    } else {
      return <Text style={styles.title}>{title}</Text>
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft,
      headerTitle,
      headerRight
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTitle, headerRight])

  const renderItem = () => (
    <View
      style={StyleSheet.flatten([
        // @ts-ignore
        styles.childrenContainer(rowHeight)
      ])}>
      {children}
    </View>
  )

  const onLayout = (e: LayoutChangeEvent) => {
    const {
      nativeEvent: { layout }
    } = e
    setRowHeight(layout.height)
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Animated.FlatList<ItemProp>
        contentContainerStyle={StyleSheet.flatten([
          styles.listContentContainerStyle
        ])}
        keyExtractor={item => item.title}
        data={[{ title: 'ChildrenComponent' }]}
        renderItem={renderItem}
      />
    </View>
  )
}

export default ScreenWrapper
