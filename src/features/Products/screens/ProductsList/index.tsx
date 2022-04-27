import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import List from '../../components/List'
import useStoreData from './useStoreData'

const ProductsList: FC = () => {
  const { loadProducts, savedProducts } = useStoreData()

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List savedProducts={savedProducts} />
    </View>
  )
}

export default ProductsList
