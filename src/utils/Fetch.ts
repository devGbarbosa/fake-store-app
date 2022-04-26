import axios from 'axios'

const ApiFetch = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 10000,
})

export { ApiFetch }
