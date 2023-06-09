import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@constants/core/routes'
import Catalog from '@screens/Catalog'
import Details from '@screens/Details'
import { primary } from '@constants/theme/colors'
import Cart from '@screens/Cart'

const Root = createNativeStackNavigator()

const RootNavigator = () => (
  <Root.Navigator
    initialRouteName={routes.Catalog}
    screenOptions={{
      headerTitleAlign: 'center',
      title: '',
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: primary
      }
    }}>
    <Root.Screen name={routes.Catalog} component={Catalog} />
    <Root.Screen name={routes.Details} component={Details as React.FC} />
    <Root.Screen name={routes.Cart} component={Cart} />
  </Root.Navigator>
)

export default RootNavigator
