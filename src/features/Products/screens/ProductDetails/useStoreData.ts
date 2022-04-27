import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../../redux-store'
import { RootState } from '../../../../redux-store/rootReducer'
import { loadProductThunk } from '../../store/thunks/productsThunk'
import { ProductBody } from '../../types'

interface Data {
  loadProduct: (productId: string) => void
  product: ProductBody
}

const useStoreData = (): Data => {
  const dispatch = useDispatch<AppDispatch>()

  const { product } = useSelector((state: RootState) => state.products)

  return {
    loadProduct: (productId: string) => dispatch(loadProductThunk(productId)),
    product,
  }
}

export default useStoreData
