import React, { FC } from 'react'
import ProductNavigator, { ProductNavigatorParamList } from '../features/Products/ProductNavigator'
import ProfileNavigator, { ProfileNavigatorParamList } from '../features/Profile/ProfileNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export type TabNavigatorParamList = {
  Products: ProductNavigatorParamList
  Profile: ProfileNavigatorParamList
}

const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={ProductNavigator} />
      <Screen name="Profile" component={ProfileNavigator} />
    </Navigator>
  )
}

export default TabNavigator
