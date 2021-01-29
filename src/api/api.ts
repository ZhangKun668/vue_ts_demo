import Http from "@/api/http";

class API {
  // 登录接口
  async login(data = {}, params = {}) {
    return await Http.request({ url: "", method: "post", data, params });
  }
}

export default new API();