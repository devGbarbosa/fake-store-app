import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import Container from '../../../../Layout/Container'
import Typography from '../../../../Layout/Typography'
import ContentSection from '../../components/ContentSection'
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
    <Container flex={1} justifyContent={'space-around'} alignItems={'center'}>
      {!product.id ? (
        <ActivityIndicator size={40} />
      ) : (
        <ContentSection
          productInfo={product}
        /> 
      )}

      <TouchableOpacity onPress={handleGoBack}>
        <Typography>Back to list</Typography>
      </TouchableOpacity>
    </Container>
  )
}

export default ProductDetails
