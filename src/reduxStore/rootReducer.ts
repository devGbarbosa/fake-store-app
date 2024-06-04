import { combineReducers } from '@reduxjs/toolkit'
import authSlice from '../Auth/store/slice/authSlice'
import cartSlice from '../modules/Cart/store/slice/cartSlice'
import productSlice from '../modules/Products/store/slice/productSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    products: productSlice,
    cart: cartSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer