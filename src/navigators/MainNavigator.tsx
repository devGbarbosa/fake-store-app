import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductNavigator from '../features/Products/ProductNavigator'

const { Navigator, Group } = createNativeStackNavigator()

const MainNavigator: FC = () => {
  return (
    <>
        <ProductNavigator />
    </>
  )
}

export default MainNavigator
