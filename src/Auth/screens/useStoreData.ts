import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../redux-store/rootReducer'
import { onLogout, signIn } from '../store/slice/authSlice'

interface Data {
  userToken: string
  onLogout: () => void
  signIn: (userToken: string) => void
}

const useStoreData = (): Data => {
  const dispatch = useDispatch()

  const { userToken } = useSelector((state: RootState) => state.auth)

  return {
    userToken,
    onLogout: () => dispatch(onLogout()),
    signIn: (userToken: string) => dispatch(signIn({ userToken })),
  }
}

export { useStoreData }
