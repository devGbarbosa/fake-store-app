import { ProductBody } from '../../../../Products/types'

interface ProductState {
  productsOnCart: ProductBody[]
  product: ProductBody
}

const initialState = {
  productsOnCart: [],
  product: {
    id: '',
    title: '',
    category: '',
    image: '',
    description: '',
    price: '',
  },
} as ProductState

export default initialState
