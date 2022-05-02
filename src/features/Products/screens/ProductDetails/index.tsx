import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import Container from '../../../../Layout/Container'
import Typography from '../../../../Layout/Typography'
import { useStoreData as useCartStoreData } from '../../../Cart/screens/CartItems/useStoreData'
import ContentSection from '../../components/ContentSection'
import { ProductNavigatorParamList } from '../../ProductNavigator'
import { useStoreData as useProductStoreData } from './useStoreData'

const ProductDetails: FC = () => {
  const { loadProduct, product, clearProduct } = useProductStoreData()
  const { productsOnCart, addProductOnCart, removeProductFromCart } =
    useCartStoreData()

  const { goBack } = useNavigation()

  const { params } = useRoute<RouteProp<ProductNavigatorParamList>>()

  useEffect(() => {
    loadProduct(params?.id!)

    return () => {
      clearProduct()
    }
  }, [])

  const handlePressCartActions = () => {
    productsOnCart.map((item) => item.id).includes(product.id)
      ? removeProductFromCart(product)
      : addProductOnCart(product)
  }

  return (
    <Container flex={1} justifyContent={'space-around'} alignItems={'center'}>
      {!product.id ? (
        <ActivityIndicator size={40} />
      ) : (
        <>
          <ContentSection productInfo={product} />

          <Container
            minHeight={50}
            maxHeight={100}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <TouchableOpacity onPress={handlePressCartActions}>
              <Typography>
                {productsOnCart.map((item) => item.id).includes(product.id)
                  ? 'Remove from cart'
                  : 'Add to cart'}
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity onPress={goBack}>
              <Typography>Back to list</Typography>
            </TouchableOpacity>
          </Container>
        </>
      )}
    </Container>
  )
}

export default ProductDetails
