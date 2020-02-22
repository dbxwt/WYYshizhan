import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  // baseURL:'/api'
})
instance.interceptors.request.use(config=>{
  //修改post请求的请求参数格式：默认的参数格式为json对象格式
  config.data = qs.stringify(config.data)
  return config
})
instance.interceptors.response.use(
  response => response,
  // eslint-disable-next-line no-unused-vars
  error => {
    console.log('请求失败了')
    return new Promise(()=>{})
  }
  
)
export default instance