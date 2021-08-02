import axios from 'axios'

const request = axios.create({
  timeout: 5000
})

// 请求拦截
request.interceptors.request(config => {
  // 设置请求头的数据类型
  if (config.method.toUpperCase() === 'POST') {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
  } else if (config.method.toUpperCase() === 'GET') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  // 状态判断

  // 注入token

}, error => {
  console.log(error)
})

// 响应拦截
request.interceptors.response(res => {
  // 处理响应

  return res
}, error => {
  // 处理异常响应
  console.log(error)

  return error
})

export default request