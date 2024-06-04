import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductBody } from '../../../Products/types'
import initialState from './initialState'

export const resetProductState = createAction<void>('resetProductState')

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductOnCart: (
      state,
      action: PayloadAction<{ product: ProductBody }>,
    ): void => {
      state.productsOnCart = [...state.productsOnCart, action.payload.product]
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ product: ProductBody }>,
    ): void => {
      state.productsOnCart = state.productsOnCart.filter(
        (item) => item.id !== action.payload.product.id,
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetProductState, (state, _) => {
      state.product = initialState.product
    })
  },
})

export const { addProductOnCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
