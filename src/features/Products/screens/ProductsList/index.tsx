import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import List from '../../components/List'
import useStoreData from './useStoreData'

const ProductsList: FC = () => {
  const { loadProducts, savedProducts } = useStoreData()

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>()

  const viewProduct = (id: string) => {
    navigate('ProductsDetails', { id })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List savedProducts={savedProducts} viewProduct={viewProduct} />
    </View>
  )
}

export default ProductsList
