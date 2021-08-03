import axios from 'axios'
import { developmentURL, productionURL } from '../project.config'

const request = axios.create({
  timeout: 5000,
})

// 请求拦截
request.interceptors.request.use(config => {
  if (process.env.NODE_ENV === 'production') {
    // 生成环境下
    config.baseURL = productionURL
  } else {
    // 默认开发环境下
    config.baseURL = developmentURL
  }
  // 状态判断

  // 注入token

  return config
}, error => {
  console.log(error)
})

// 响应拦截
request.interceptors.response.use(res => {
  // 处理响应

  return res
}, error => {
  // 处理异常响应
  console.log(error)

  return error
})

export default request