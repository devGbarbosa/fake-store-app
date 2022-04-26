import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductBody } from '../../types'
import initialState from './initialState'

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
  },
})

export const { saveProducts } = productSlice.actions

export default productSlice.reducer
