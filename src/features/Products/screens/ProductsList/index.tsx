import { AnyAction } from '@reduxjs/toolkit'
import React, { Dispatch, FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, AppThunk } from '../../../../redux-store'
import { RootState } from '../../../../redux-store/rootReducer'
import List from '../../components/List'
import { loadProducts } from '../../store/thunks/productsThunk'

const ProductsList: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const { savedProducts } = useSelector((state: RootState) => state.products)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List savedProducts={savedProducts} />
    </View>
  )
}

export default ProductsList
