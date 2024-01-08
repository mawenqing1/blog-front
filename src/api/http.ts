import axios, { AxiosPromise } from 'axios'
import { checkUrl } from '@/utils/utils'
import { message } from 'antd'
import { ResType } from '@/types/http'
import { resolve } from 'path'

/*
 * 基础配置
 * */
const instance = axios.create({
  baseURL: checkUrl(),
  withCredentials: false,
  timeout: 50000
})

instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
// instance.defaults.headers.common['X-Forwarded-For'] = '210.0.158.254'
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 *       case 302: message = '接口重定向了！';break;
 *       case 400: message = '参数不正确！';break;
 *       case 401: message = '您未登录，或者登录已经超时，请先登录！';break;
 *       case 403: message = '您没有权限操作！'; break;
 *       case 404: message = `请求地址出错: ${error.response.config.url}`; break; // 在正确域名下
 *       case 408: message = '请求超时！'; break;
 *       case 409: message = '系统已存在相同数据！'; break;
 *       case 500: message = '服务器内部错误！'; break;
 *       case 501: message = '服务未实现！'; break;
 *       case 502: message = '网关错误！'; break;
 *       case 503: message = '服务不可用！'; break;
 *       case 504: message = '服务暂时无法访问，请稍后再试！'; break;
 *       case 505: message = 'HTTP版本不受支持！'; break;
 *       default: message = '异常问题，请联系管理员！'; break
 */
const errorHandle = (status: number, msg: string) => {
  message.error(msg)
}
/*
 * 请求拦截
 * 每次发送请求之前判断localStorage中是否存在token
 * 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
 * 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
 * */
instance.interceptors.request.use(
  (request) => {
    // request.headers["MWQ_ACCESS_TOKEN"] =
    //     localStorage.getItem("MWQ_ACCESS_TOKEN");
    return request
  },
  async function (error) {
    return await Promise.reject(error)
  }
)
/*
 * 响应拦截
 * 请求成功的(status === 200)的直接返回，非200的异常处理走errorHandle
 * 具体要和服务端进行沟通
 * **/
instance.interceptors.response.use(
  async function (res) {
    if (res.status === 200) {
      return await Promise.resolve(res.data)
    } else {
      return await Promise.reject(res)
    }
  },
  function (res) {
    // 请求已发出，但是不在2xx的范围
    if (res && res.response) {
      let msg = '系统异常'
      if (res.data && res.data.message) {
        msg = res.data.message
      }
      errorHandle(res.response.status, msg)
      return Promise.reject(res)
    } else {
      // 处理其他的情况
      if (!window.navigator.onLine) {
        // todo..
      } else {
        return Promise.reject(res)
      }
    }
  }
)
/*
 * export default instance;
 * 1. 如果是get请求  需要使用params来传递data  ?a=10&c=10
 * 2. 如果不是get请求  需要使用data来传递data   请求体传参
 * [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
 * method参数：get,Get,GET  转换成小写再来判断
 * 在对象，['params']:data ===== params:data 这样理解
 *
 * */
export default async <T>(url: string, method: string, data: any): Promise<ResType<T>> => {
  return await new Promise((resole) => {
    instance({
      url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    }).then((res: any) => {
      resole(res)
    })
  })
}
