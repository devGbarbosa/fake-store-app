import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ProductNavigatorParamList } from '../../ProductNavigator'
import useStoreData from './useStoreData'

const ProductDetails: FC = () => {
  const { loadProduct, product } = useStoreData()

  const { goBack } = useNavigation()

  const { params } = useRoute<RouteProp<ProductNavigatorParamList>>()

  useEffect(() => {
    loadProduct(params?.id!)
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Produto aqui</Text>

      <Text>{product.title}</Text>

      <TouchableOpacity onPress={goBack}>
        <Text>Back to list</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetails
