import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProductsList, ProductDetails } from './screens'

const { Navigator, Screen } = createNativeStackNavigator<{
  ProductsList: undefined
  ProductsDetails: { id: string }
}>()

const ProductNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProductsList" component={ProductsList} />
      <Screen name="ProductsDetails" component={ProductDetails} />
    </Navigator>
  )
}

export default ProductNavigator
