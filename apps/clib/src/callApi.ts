import Debug from 'debug'
import qs from 'qs'

import type {
  ProgressMsg,
  ProgressMsgData,
  ProgressMsgType,
} from '../../../../backend/packages/api-saas/src/mw/async'
import { AsyncMsgHandler } from '../../../../backend/packages/api-saas/src/mw/async/asyncMsg'

import { gotoLogin } from './util/sso'
// import { wsWorker } from '../../../../backend/packages/push-center/src/fe/ws.class';

const debug = Debug(module.id)

function filter(prefix: string, v: any) {
  return v === null || v === '' ? undefined : v
}

export interface RoomListener {
  /**
   * 注册一个消息处理器
   * @param msgType
   * @param handler
   * @return 返回一个注册具柄，用于消除监听
   */
  registerHandle: <T extends ProgressMsgType>(
    msgType: T,
    handler: (msg: ProgressMsg<T>) => Promise<any>,
  ) => symbol

  /**
   * 注册一个消息处理器,如果不存在
   * @param msgType
   * @param handleKey 唯一Key
   * @param handler
   * @return 返回一个注册具柄，用于消除监听
   */
  registerHandleIfAbsent: <T extends ProgressMsgType>(
    msgType: T,
    handleKey: any,
    handler: (msg: ProgressMsg<T>) => Promise<any>,
  ) => void

  /**
   * 注销监听
   * @param handleSymbol
   */
  unregisterHandle(handleSymbol: any): void

  /**
   * 分发消息
   * @param msg
   */
  dispatchMsg<T extends ProgressMsgType>(msg: ProgressMsg<T>): void

  /**
   * 监听离线
   * @param func
   */
  onOffline(func: () => void): void

  /**
   * Room 离线，由room 负责触发离线的监听
   * @param func
   */
  offline(): void
}

export interface ProgressHelper {
  /**
   * 注册一个callId,如果不存在
   * @param callId
   */
  registerIfAbsent: (channelId: string) => Promise<RoomListener | null>

  /**
   * 撤销一个注册
   * @param callId
   */
  unregister: (channelId: string) => void
}

export interface AsyncMsgHelper {
  /**
   * 注册一个channelId,如果不存在
   * @param channelId
   */
  registerIfAbsent: (channelId: string, asyncMsgHandler: AsyncMsgHandler<any>) => Promise<boolean>

  /**
   * 撤销一个注册
   * @param channelId
   */
  unregister: (channelId: string) => void
}

/**
 * 调用服务端API的统一函数
 *
 * onwire 数据范例
 * ```
 * in oss
 * /oss/es/info?period=2
 * DcCode: HB01-S003-001
 * Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.content.check
 *
 * in portal
 * GET /catalog/menu?appCode=portal&temp=1598429194196
 * ```
 *
 * @param rl 接口 request line, 如 get /oss/es/info，!开头的请求携带cookie，默认都不携带cookie
 * @param params 接口参数，如 {period: 2}
 * @param option 如 withToken=true 要求设置鉴权 token
 */
export function callSaasApi(
  rl: string,
  /** todo 默认值是否应该是{} */
  params: any = {},
  onResponse?: typeof callSaasApi.onResponse,
  extHeaders?: any,
) {
  const rlsplits = rl.split(/ +/) // 如 !get /catalog/getProduct 拆成
  let method = rlsplits[0].toUpperCase()
  let credentials = false // 默认发送请求都不带cookie
  const path = rlsplits[1]
  const url1 = `${callSaasApi.getApiPrefix()}${path}`
  if (method.startsWith('!')) {
    // 如果!开头 request line 则请求携带cookie
    method = method.substring(1)
    credentials = true
  }
  debug({ url1 })

  // 设置 header Content-Type，没有设置则按照 method 设置默认的值
  const headers = {} as { [key: string]: string }

  // 扩展请求头
  Object.assign(headers, extHeaders || {})

  /** todo headers 肯定为空对象，下面 if 语句判断多余了 */
  if (!headers['Content-Type'] && !(params instanceof FormData)) {
    if (method === 'GET' || method === 'URL') {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    } else {
      // headers['Content-Type'] = 'application/json; charset=utf-8';
      if (path.startsWith('/proxy/')) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
      } else {
        headers['Content-Type'] = 'application/json'
      }
    }
  }

  // headers['authorization'] = 'JWT 2F0B5BD32E69323CAC5B641CD3C33D38';
  // headers['authorization'] = 'JWT 7644034E0F95C42D405EA905FDE00BD3';

  // 新接口需要传userToken做用户认证
  // headers['userToken'] = '23AF55A299D054E9FC6E4E856AB8F239';

  const token = callSaasApi.getUserToken()
  // token过期或账号失效时，延迟调用接口，等待重定向
  if (token === 'expired' || token === 'invalid') {
    return (onResponse || callSaasApi.onResponse)(new Promise(() => {}))
  }

  headers['authorization'] = callSaasApi.getUserToken()
  // 数据在 query 或 body 中
  let url2!: string
  let body // fetch option.body
  if (params instanceof FormData) {
    url2 = url1
    body = params
  } else if (method === 'GET' || method === 'URL') {
    const query = qs.stringify(params)
    url2 = query ? `${url1}?${query}` : url1
  } else if (headers['Content-Type'] !== '') {
    url2 = url1
    if (path.startsWith('/proxy/')) {
      body = qs.stringify(params)
    } else {
      body = JSON.stringify(params)
    }
  }
  debug({ url2 })

  // url 添加 temp 参数，模仿 portal 调用后台现状，但是发现不用也可以
  // const urlParsed = new URI(url2);
  // urlParsed.addQuery('temp', Date.now());
  // const fetchUrl = urlParsed.href();
  // console.log({ fetchUrl, method, body, option });

  const responsePromise = fetch(url2, {
    method,
    body,
    credentials: credentials ? 'include' : 'omit',
    headers,
    cache: 'no-store',
  })
  // onResonse 处理 promise，有机会实现超时检测等功能；如果直接返回 promise 结果就没机会检测超时了。
  return (onResponse || callSaasApi.onResponse)(responsePromise)
}

export { callSaasApi as callApi }

callSaasApi.getApiPrefix = () => 'http://127.0.0.1:9000'
callSaasApi.getUserToken = () => ''

callSaasApi.progressHelper = {
  async registerIfAbsent<T>(callId: string): Promise<RoomListener | null> {
    return {
      offline(): void {
        throw Error('method not implemented')
      },
      onOffline(func: () => void): void {
        throw Error('method not implemented')
      },
      registerHandleIfAbsent<T extends keyof ProgressMsgData>(
        msgType: T,
        handleKey: any,
        handler: (msg: ProgressMsg<T>) => Promise<any>,
      ): void {
        throw Error('method not implemented')
      },
      unregisterHandle(handleSymbol: any): void {
        throw Error('method not implemented')
      },
      dispatchMsg<T extends keyof ProgressMsgData>(msg: ProgressMsg<T>): void {
        throw Error('method not implemented')
      },
      registerHandle<T extends keyof ProgressMsgData>(
        msgType: string,
        handler: (msg: ProgressMsg<T>) => Promise<any>,
      ): symbol {
        throw Error('method not implemented')
      },
    }
  },
}

callSaasApi.asyncMsgHelper = {
  /**
   * 注册一个channelId,如果不存在
   * @param channelId
   */
  registerIfAbsent(channelId: string, asyncMsgHandler: AsyncMsgHandler<any>) {
    throw Error('method not implemented')
  },

  /**
   * 撤销一个注册
   * @param channelId
   */
  unregister(channelId: string) {
    throw Error('method not implemented')
  },
} as AsyncMsgHelper

// 通常这些 header 项来自前端应用全局状态
// 经常设置以下 header
// 1. Bearer token 登录令牌
// 2. DcCode 区域编码
// 3. isvFlag 是否独立服务商角色访问
// deprecated

// 自行设置响应处理函数，返回 promise
callSaasApi.onResponse = (resp: Promise<Response>) => resp.then((res) => res.json())

export default callSaasApi

/** saas 接口响应规格
 * 参考 https://alidocs.dingtalk.com/i/nodes/od245kZmnOeW45QmgendVYbzxL6R0wMQ?nav=share&navQuery=spaceId%3D15eGebOrK6VxRz3N
 */
export interface SaasResponse {
  /** 0 代表成功，非零代表错误码，调用方如前台需要按照不同错误类型分别处理使用 */
  code: 0 | number
  /** 成功的话，返回 data 数据；失败也可能返回 */
  data: any
  /** 失败的情况下错误信息，需要前台提示错误时填写，通常异常情况(code!==0)时需要填写 */
  msg?: string
}

interface PythonSaasResponse {
  code: 200 | number
  msg: '成功' | string
  isSuccess: true | boolean
  data: any
}

interface JavaEsResponse {}

/** 配置如何判断调用是否异常 */
callSaasApi.hasError = (resp: SaasResponse) => {
  return resp.code !== 0
}

/** 配置如何从响应中取得实体载荷，结果是 AsyncTrack 模型的 [.d, .w, .c, .m] */
callSaasApi.extractData = (resp: SaasResponse) => {
  return [resp.data, { ...resp, data: true }, resp.code, resp.msg]
}

/** 配置无 token 时是否抛异常，默认配置抛异常 */
callSaasApi.throwWhenNoToken = (path: string, request: any) => {
  return true
}

const ignorePathRe = /^\/(login|signup)\b/i

/** 给 MST+API 使用的响应处理 */
export const onResponse: typeof callSaasApi.onResponse = (resp: Promise<Response>) =>
  resp.then((rsp) => {
    if (rsp.status === 403 || rsp.status === 402) {
      // await Modal.warning({
      //   title: '超出访问权限',
      //   content: '您暂时没有权限访问该系统，请联系管理员给您配置相关访问权限。',
      //   onOk: () => location.assign(`/login?nextPage=${encodeURIComponent(uri)}`),
      // });
      callSaasApi.gotoLogin()
    }
    const json = rsp.json()
    return json
  })

callSaasApi.onAsyncTrackResponse = onResponse

callSaasApi.showError = (e: SaasResponse) => {
  alert(e.msg ?? '未知异常')
}

callSaasApi.gotoLogin = () => {
  gotoLogin('/login')
}
