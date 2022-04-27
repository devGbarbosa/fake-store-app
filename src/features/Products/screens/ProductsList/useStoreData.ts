import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../../redux-store'
import { RootState } from '../../../../redux-store/rootReducer'
import { loadProductsThunk } from '../../store/thunks/productsThunk'
import { ProductBody } from '../../types'

interface Data {
  loadProducts: () => void
  savedProducts: ProductBody[]
}

const useStoreData = (): Data => {
  const dispatch = useDispatch<AppDispatch>()

  const { savedProducts } = useSelector((state: RootState) => state.products)

  return {
    loadProducts: () => dispatch(loadProductsThunk()),
    savedProducts,
  }
}

export default useStoreData
