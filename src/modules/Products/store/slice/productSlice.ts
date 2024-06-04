import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductBody } from '../../types'
import initialState from './initialState'

export const resetProductState = createAction<void>('resetProductState')

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProducts: (
      state,
      action: PayloadAction<{ savedProducts: ProductBody[] }>,
    ): void => {
      state.savedProducts = action.payload.savedProducts
    },
    saveProduct: (
      state,
      action: PayloadAction<{ product: ProductBody }>,
    ): void => {
      state.product = action.payload.product
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetProductState, (state, _) => {
      state.product = initialState.product
    })
  },
})

export const { saveProducts, saveProduct } = productSlice.actions

export default productSlice.reducer
