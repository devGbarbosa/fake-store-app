import { ApiFetch } from '../../../../utils/Fetch'

export const getProducts = async () => {
  const results = (await ApiFetch.get(`https://fakestoreapi.com/products?limit=5`)).data
  return results
}
