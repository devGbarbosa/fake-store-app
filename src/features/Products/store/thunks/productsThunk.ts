import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductBody } from '../../types'
import { getProducts } from '../api'
import { saveProducts } from '../slice/productSlice'

export const loadProducts = createAsyncThunk<void, void>(
  'products/saveProducts',
  async (_, { dispatch }) => {
    const products: ProductBody[] = await getProducts()
    dispatch(saveProducts({ savedProducts: products }))
  },
)
