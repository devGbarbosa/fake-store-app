interface AuthState {
  userToken: string
}

const initialState = {
  userToken: '',
} as AuthState

export default initialState
