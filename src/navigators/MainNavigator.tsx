import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'

const { Navigator, Screen } = createNativeStackNavigator()

const MainNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TabNavigator" component={TabNavigator} />
    </Navigator>
  )
}

export default MainNavigator
