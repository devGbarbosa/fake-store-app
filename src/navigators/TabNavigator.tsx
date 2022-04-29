import React, { FC } from 'react'
import ProductNavigator, {
  ProductNavigatorParamList,
} from '../features/Products/ProductNavigator'
import CartNavigator, {
  CartNavigatorParamList,
} from '../features/Cart/CartNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

export type TabNavigatorParamList = {
  Products: ProductNavigatorParamList
  Cart: CartNavigatorParamList
}

const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Products"
        component={ProductNavigator}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <Icon name={'shopping-bag'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <Icon name={'shopping-cart'} size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}

export default TabNavigator
