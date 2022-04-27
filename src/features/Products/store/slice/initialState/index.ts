import { ProductBody } from '../../../types'

interface ProductState {
  savedProducts: ProductBody[]
  product: ProductBody
}

const initialState = {
  savedProducts: [],
  product: { id: '', title: '', category: '' },
} as ProductState

export default initialState
