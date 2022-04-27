import { Action, AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store
