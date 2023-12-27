import axios from 'axios'
import {BASE_URL} from './endpoints'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // timeout: 5000,
})
export default axiosInstance
