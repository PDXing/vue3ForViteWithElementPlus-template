import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseUrl: '/api',
  responseType: 'json'
})

api.interceptors.request.use(config => {
  if (config.method === 'GET') {
    config.data = qs.stringify(config.data)
  }
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  return config
})

api.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    }

    ElNotification.error(response.data.msg)
    return Promise.reject(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
