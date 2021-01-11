import axios from 'axios'
import { Dialog } from 'vant'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    Dialog({
      message: '请求超时!'
    })
    return Promise.resolve(err)
  }
)
service.interceptors.response.use(
  (data) => {
    if (data.status && data.status === 200) {
      return data
    }
  },
  (err) => {
    if (err.response.status === 504 || err.response.status === 404) {
      Dialog({
        message: '哎呦,服务器开小差儿了⊙﹏⊙∥'
      })
    } else if (err.response.status === 403) {
      Dialog({
        message: '权限不足,请联系管理员!'
      })
    } else if (err.response.status === 500) {
      if (err.response.data.code === 999) {
        return
      }
      Dialog({
        message: '系统异常!'
      })
    } else if (err.response.status === 401) {
      Dialog({
        message: '您的用户认证失效，请重新登录！'
      })
      console.error('认证失败', err)
    }
    return Promise.resolve(err)
  }
)

export default service
