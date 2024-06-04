import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../../../../Layout/Container'
import List from '../../components/List'
import { ProductNavigatorParamList } from '../../ProductNavigator'
import { useStoreData } from '../useStoreData'

const ProductsList: FC = () => {
  const { loadProducts, savedProducts } = useStoreData()

  const { navigate } =
    useNavigation<NativeStackNavigationProp<ProductNavigatorParamList>>()

  const viewProduct = (id: string) => {
    navigate('ProductsDetails', { id })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        py={2}
      >
        <List savedProducts={savedProducts} viewProduct={viewProduct} />
      </Container>
    </SafeAreaView>
  )
}

export default ProductsList
