import { ProductBody } from "../../../types"

interface ProductState {
  savedProducts: ProductBody[]
}

const initialState = { savedProducts: [] } as ProductState

export default initialState
