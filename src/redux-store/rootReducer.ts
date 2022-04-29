import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from '../features/Cart/store/slice/cartSlice'
import productSlice from '../features/Products/store/slice/productSlice'

const rootReducer = combineReducers({
    products: productSlice,
    cart: cartSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer