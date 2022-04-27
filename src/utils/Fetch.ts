import axios from 'axios'
import { API } from '../config/api'

const ApiFetch = axios.create({
  baseURL: API.URL,
  timeout: 10000,
})

export { ApiFetch }
