import {create} from "apisauce"
import cache from "../utility/cache"
import authStorage from "../auth/storage"

const apiClient = create({
  baseURL: "http://192.168.43.137:9000/api",
})

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if (!authToken) return
  request.headers["x-auth-token"] = authToken
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig)

  if (res.ok) {
    cache.store(url, res.data)
    return res
  }

  const data = await cache.get(url)
  return data ? {ok: true, data} : res
}
export default apiClient
