/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from '@app'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App))
