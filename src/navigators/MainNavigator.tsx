import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator, { TabNavigatorParamList } from './TabNavigator'

export type MainNavigatorParamList = {
  TabNavigator: TabNavigatorParamList
}

const { Navigator, Screen } = createNativeStackNavigator<MainNavigatorParamList>()

const MainNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TabNavigator" component={TabNavigator} />
    </Navigator>
  )
}

export default MainNavigator
