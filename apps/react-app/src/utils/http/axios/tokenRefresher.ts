// import { AxiosInstance, AxiosResponse } from 'axios'
// import { omit } from 'lodash-es'
//
// import { RefreshTokenParams } from '@/api/sys/model/userModel'
// import { refreshTokenApi } from '@/api/sys/user'
// import sys from '@/enums/sys'
// import { useUserStore } from '@/store/modules/user'
// import { getRefreshToken } from '@/utils/auth'
// import { CreateAxiosOptions } from '@/utils/http/axios/axiosTransform'
//
// import { Result } from '#/axios'
// import { TokenStore } from '#/store'
//
// //  TODO 后台接口暂未配置相关信息，暂时不用
// export class TokenRefresher {
//   private MAX_ERROR_COUNT = 5
//
//   private currentCount = 0
//
//   private queue: ((t: string) => any)[] = []
//
//   private isRefresh = false
//
//   private clearAuth(): void {
//     const useSetToken = useUserStore.use.setToken()
//     const isLocal = useUserStore.use.isLocal()
//     const logout = useUserStore.use.logout()
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useSetToken(undefined, isLocal)
//     logout(true)
//   }
//
//   async refreshToken(
//     res: AxiosResponse<Result>,
//     options: CreateAxiosOptions,
//     axiosInstance: AxiosInstance,
//     timeoutMsg: string,
//   ): Promise<any> {
//     const refreshToken = getRefreshToken()
//     const useSetToken = useUserStore.use.setToken()
//     const isLocal = useUserStore.use.isLocal()
//
//     if (!refreshToken) {
//       this.clearAuth()
//     }
//     // 提取请求的配置
//     const { config } = res
//     // 判断是否refresh失败且状态码401，再次进入错误拦截器
//     if (config.url?.includes('refresh')) {
//       this.clearAuth()
//     }
//     // 判断当前是否为刷新状态中（防止多个请求导致多次调refresh接口
//     if (!this.isRefresh) {
//       this.isRefresh = true
//       if (this.currentCount > this.MAX_ERROR_COUNT) {
//         this.clearAuth()
//       }
//       this.currentCount += 1
//       // oauth/token?access_token=8192be8f-4564-42cc-9f0f-7049be5ee085&grant_type=refresh_token&refresh_token=4f9ad8f9-885c-4cab-9f39-dc18887b526a&scope=read
//       try {
//         const data = await refreshTokenApi(<RefreshTokenParams>{
//           refresh_token: getRefreshToken(),
//           grant_type: 'refresh_token',
//         })
//         // 请求成功之后，重新保存access_token
//         // @ts-ignore
//         const tokenData: TokenStore = omit(data, 'code')
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         useSetToken(tokenData, isLocal)
//         const getToken = useUserStore.use.token()
//         const accessToken = getToken
//         this.currentCount = 0
//         this.queue.forEach((cb) => cb(accessToken))
//       } catch (error) {
//         this.clearAuth()
//         throw new Error(timeoutMsg || sys.api.apiRequestFailed)
//       } finally {
//         this.isRefresh = false
//       }
//     } else {
//       // 正在刷新token，将返回一个未执行resolve的promise
//       // 当前正在尝试刷新token，先返回一个promise阻塞请求并推进请求列表中
//       return new Promise((resolve) => {
//         // 缓存网络请求，等token刷新后直接执行
//         this.queue.push((newToken: string) => {
//           Reflect.set(
//             config.headers, // 在TypeScript中，!是一个非空断言操作符（Non-null Assertion Operator），用于告诉编译器某个表达式的值不会是null或undefined。
//             'Authorization',
//             // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//             `${options.authenticationScheme} ${newToken}`,
//           )
//           resolve(axiosInstance(config))
//         })
//       })
//     }
//     return timeoutMsg
//   }
// }
