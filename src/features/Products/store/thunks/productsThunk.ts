import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductBody } from '../../types'
import { getProductById, getProducts } from '../api'
import { saveProduct, saveProducts } from '../slice/productSlice'

export const loadProductsThunk = createAsyncThunk<void, void>(
  'products/saveProducts',
  async (_, { dispatch }) => {
    const products: ProductBody[] = await getProducts()
    dispatch(saveProducts({ savedProducts: products }))
  },
)

export const loadProductThunk = createAsyncThunk<void, string>(
  'products/savedProducts',
  async (productId, { dispatch }) => {
    const product: ProductBody = await getProductById(productId)
    dispatch(saveProduct({ product }))
  },
)
