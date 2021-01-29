import Axios from "axios";
import Store from "@/storage/storage"

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

  async getBaseUrl(){
    // 开发环境
    if(process.env.NODE_ENV == "development") {
      return ""
    }

    // 生产环境
    else {
      if(Store.getItem("configCatch")) {
        return Store.getItem("configCatch")["api"];
      }else {
        const result = await Axios({
          method: "get",
          url: `./config.json?_=${new Date().getTime()}`
        });
  
        this.configCatch = result.data;
        Store.setItem("configCatch", result.data);

        return result.data["api"];
      }
    }
  }

  async request(config: any) {
    if(!this.baseUrl) {
      this.baseUrl = await this.getBaseUrl();
    }

    config.url = `${this.baseUrl}${config.url}`;

    const result = await this.xhr(config);
    return result;
  }
}

export default new API();