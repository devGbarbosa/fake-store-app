import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProductsList, ProductDetails } from './screens'

const { Navigator, Screen } = createNativeStackNavigator()

const ProductNavigator: FC = () => {
  return (
    <Navigator>
      <Screen name="ProductsList" component={ProductsList} />
      <Screen name="ProductsDetails" component={ProductDetails} />
    </Navigator>
  )
}

export default ProductNavigator
