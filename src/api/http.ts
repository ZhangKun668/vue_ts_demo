import Axios from "axios";

const instance = Axios.create({
  timeout: 1000 * 60,// 接口超时时间
  headers: {// 设置请求头
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true,// 是否跨域携带请求头cookie
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 创建请求实例
class API {
  configCatch = null;// 外部缓存
  xhr = instance;// axios 请求实例
  baseUrl = "";// 请求地址

  
}