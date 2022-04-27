import { API } from '../../../../config/api'
import { ApiFetch } from '../../../../utils/Fetch'

const baseUrl = API.URL

export const getProducts = async () => {
  const results = (await ApiFetch.get(`${baseUrl}/products?limit=5`)).data
  return results
}

export const getProductById = async (id: string) => {
  const result = (
    await ApiFetch.get(`${baseUrl}/products/${Number(id)}`)
  ).data

  return result
}
