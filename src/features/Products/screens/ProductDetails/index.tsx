import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { ProductNavigatorParamList } from '../../ProductNavigator'
import useStoreData from './useStoreData'

const ProductDetails: FC = () => {
  const { loadProduct, product, clearProduct } = useStoreData()

  const { goBack } = useNavigation()

  const { params } = useRoute<RouteProp<ProductNavigatorParamList>>()

  useEffect(() => {
    loadProduct(params?.id!)
  }, [])

  const handleGoBack = () => {
    goBack()
    clearProduct()
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!product.id ? <ActivityIndicator size={40} /> : <Text>{product.title}</Text>}

      <TouchableOpacity onPress={handleGoBack}>
        <Text>Back to list</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetails
