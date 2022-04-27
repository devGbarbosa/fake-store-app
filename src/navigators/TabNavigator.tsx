import React, { FC } from 'react'
import ProductNavigator from '../features/Products/ProductNavigator'
import ProfileNavigator from '../features/Profile/ProfileNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

const TabNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={ProductNavigator} />
      <Screen name="Profile" component={ProfileNavigator} />
    </Navigator>
  )
}

export default TabNavigator
