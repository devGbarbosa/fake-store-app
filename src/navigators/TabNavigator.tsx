import React, { FC } from 'react'
import ProductNavigator, { ProductNavigatorParamList } from '../features/Products/ProductNavigator'
import CartNavigator, { CartNavigatorParamList } from '../features/Cart/CartNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export type TabNavigatorParamList = {
  Products: ProductNavigatorParamList
  Cart: CartNavigatorParamList
}

const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={ProductNavigator} />
      <Screen name="Cart" component={CartNavigator} />
    </Navigator>
  )
}

export default TabNavigator
