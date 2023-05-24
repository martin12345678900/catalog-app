import React from 'react'
import { white } from '@constants/theme/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from '@components/Icon'
import Icons from '@constants/icons'
import { Pressable, StyleSheet, Text } from 'react-native'
import styles from './styles'

interface IBackProps {
  color?: string
}

const Back: React.FC<IBackProps> = ({ color = white }) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <Pressable
      accessibilityRole='button'
      onPress={goBack}
      style={({ pressed }) =>
        StyleSheet.flatten([
          styles.container,
          {
            opacity: pressed ? 0.5 : 1
          }
        ])
      }>
      <Icon name={Icons.back} size={18} color={color} />
      <Text style={StyleSheet.flatten([styles.text, { color }])}>Back</Text>
    </Pressable>
  )
}

export default Back
