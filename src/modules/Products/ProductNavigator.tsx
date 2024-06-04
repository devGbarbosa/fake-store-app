import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProductsList, ProductDetails, ProductForm } from './screens'

export type ProductNavigatorParamList = {
  ProductsList: undefined
  ProductForm: undefined
  ProductsDetails: {
    id: string
  }
}

const { Navigator, Screen } =
  createNativeStackNavigator<ProductNavigatorParamList>()

const ProductNavigator: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Fake Store',
        }}
      />
      <Screen name="ProductsDetails" component={ProductDetails} />
      <Screen name="ProductForm" component={ProductForm} />
    </Navigator>
  )
}

export default ProductNavigator
