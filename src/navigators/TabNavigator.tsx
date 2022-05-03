import React, { FC } from 'react'
import ProductNavigator, {
  ProductNavigatorParamList,
} from '../features/Products/ProductNavigator'
import CartNavigator, {
  CartNavigatorParamList,
} from '../features/Cart/CartNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Platform, TouchableOpacity } from 'react-native'
import Typography from '../Layout/Typography'

export type TabNavigatorParamList = {
  Products: ProductNavigatorParamList
  Cart: CartNavigatorParamList
  AddProduct: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.OS === 'android' && {
          paddingBottom: 12,
          height: 60,
        },
      }}
    >
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
        name="AddProduct"
        component={ProductNavigator}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()

            navigation.navigate('AddProduct', { screen: 'ProductForm' })
          },
        })}
        options={{
          title: 'Add',
          tabBarActiveTintColor: 'green',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color }) => (
            <Icon name={'plus'} size={24} color={color} />
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
