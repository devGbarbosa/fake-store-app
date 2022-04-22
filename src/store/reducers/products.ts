import { createReducer } from '@reduxjs/toolkit'
import { saveProducts } from '../actions/products'

export type ProductState = {
  products: string[]
}

const initialState: ProductState = {
  products: [],
}

export const productsReducer = createReducer(initialState, builder => {
  builder.addCase(saveProducts, (state, action) => ({
    ...state,
    products: action.payload.products,
  }))
})
