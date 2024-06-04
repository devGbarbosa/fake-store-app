import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../reduxStore'
import { RootState } from '../../../reduxStore/rootReducer'
import { resetProductState } from '../store/slice/productSlice'
import {
  loadProductsThunk,
  loadProductThunk,
  submitProductThunk,
} from '../store/thunks/productsThunk'
import { ProductBody } from '../types'

interface Data {
  loadProducts: () => void
  savedProducts: ProductBody[]
  loadProduct: (productId: string) => void
  clearProduct: () => void
  submitProduct: (product: ProductBody) => void
  product: ProductBody
}

const useStoreData = (): Data => {
  const dispatch = useDispatch<AppDispatch>()

  const { savedProducts, product } = useSelector(
    (state: RootState) => state.products,
  )

  return {
    loadProducts: () => dispatch(loadProductsThunk()),
    savedProducts,
    loadProduct: (productId: string) => dispatch(loadProductThunk(productId)),
    clearProduct: () => dispatch(resetProductState()),
    submitProduct: (product: ProductBody) =>
      dispatch(submitProductThunk(product)),
    product,
  }
}

export { useStoreData }
