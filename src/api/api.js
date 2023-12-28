import axios from 'axios'
import {BASE_URL} from './endpoints'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // timeout: 5000,
})
export default axiosInstance

axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axiosInstance.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
})
