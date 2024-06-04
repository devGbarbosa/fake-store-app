interface AuthState {
  userToken: string
}

const initialState = {
  userToken: 'Test',
} as AuthState

export default initialState
