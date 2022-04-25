import { combineReducers } from '@reduxjs/toolkit'
import productSlice from '../features/Products/store/slice/productSlice'

const rootReducer = combineReducers({
    products: productSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer