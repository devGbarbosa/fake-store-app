import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../../redux-store/rootReducer'
import List from '../../components/List'
import { saveProducts } from '../../store/slice/productSlice'

const ProductsList: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveProducts({ savedProducts: ['pencil','ball', 'pen', 'box'] }))
  }, [])

  const { savedProducts } = useSelector((state: RootState) => state.products)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List savedProducts={savedProducts} />
    </View>
  )
}

export default ProductsList
