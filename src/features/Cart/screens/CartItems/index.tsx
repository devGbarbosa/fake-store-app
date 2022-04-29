import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../../../../Layout/Container'
import List from '../../components/List'
import { useStoreData } from './useStoreData'

const CartItems: FC = () => {
  const { productsOnCart } = useStoreData()

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>()

  const viewProduct = (id: string) => {
    navigate('ProductsDetails', { id })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container flex={1} justifyContent={'center'} alignItems={'center'}>
        <List productsOnCart={productsOnCart} viewProduct={viewProduct} />
      </Container>
    </SafeAreaView>
  )
}

export default CartItems
