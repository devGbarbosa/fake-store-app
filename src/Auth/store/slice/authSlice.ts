import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

export const onLogout = createAction<void>('onLogout')

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ userToken: string }>): void => {
      state.userToken = action.payload.userToken
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onLogout, (state, _) => {
      state.userToken = initialState.userToken
    })
  },
})

export const { signIn } = authSlice.actions

export default authSlice.reducer
