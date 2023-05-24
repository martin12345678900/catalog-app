import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import RootNavigator from './RootNavigator'

const Navigator = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' />
    <RootNavigator />
  </NavigationContainer>
)

export default Navigator
