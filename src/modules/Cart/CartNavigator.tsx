import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartItems } from './screens'

export type CartNavigatorParamList = {
  CartItems: undefined
}

const { Navigator, Screen } =
  createNativeStackNavigator<CartNavigatorParamList>()

const CartNavigator: FC
 = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="CartItems" component={CartItems} />
    </Navigator>
  )
}

export default CartNavigator
