import { createAction } from '@reduxjs/toolkit'

export const saveProducts = createAction(
  'SAVE_PRODUCTS',
  (products: string[]): { payload: { products: string[] } } => ({
    payload: {
      products,
    },
  })
)
