import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../../reduxStore'
import { RootState } from '../../../../reduxStore/rootReducer'
import { ProductBody } from '../../../Products/types'
import {
  addProductOnCart,
  removeProductFromCart,
} from '../../store/slice/cartSlice'

interface Data {
  productsOnCart: ProductBody[]
  addProductOnCart: (product: ProductBody) => void
  removeProductFromCart: (product: ProductBody) => void
}

export const useStoreData = (): Data => {
  const dispatch = useDispatch<AppDispatch>()

  const { productsOnCart } = useSelector((state: RootState) => state.cart)

  return {
    addProductOnCart: (product: ProductBody) =>
      dispatch(addProductOnCart({ product })),
    removeProductFromCart: (product: ProductBody) =>
      dispatch(removeProductFromCart({ product })),
    productsOnCart,
  }
}
