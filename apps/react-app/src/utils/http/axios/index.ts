// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { RequestOptions, Result } from '#/axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/enums/httpEnum';

import sys from '@/enums/sys';
import { deepMerge, setObjToUrlParams } from '@/utils';
import { AxiosRetry } from '@/utils/http/axios/axiosRetry';
import { isEmpty, isNull, isString, isUnDef } from '@/utils/is';
import { message as Message, Modal } from 'antd';
import axios from 'axios';
import { clone } from 'lodash-es';
import { VAxios } from './Axios';
import { checkStatus } from './checkStatus';

import { formatRequestDate, joinTimestamp } from './helper';

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
   */
  transformResponseHook: async (
    res: AxiosResponse<Result>,
    options: RequestOptions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // axiosInstance: AxiosInstance,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // createAxiosOptions: CreateAxiosOptions,
  ) => {
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) return res;

    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) return res.data;

    // 错误的时候返回
    const { data } = res;
    if (!res.data) {
      // return '[HTTP] Request has no return value';
      throw new Error(sys.api.apiRequestFailed);
    }
    //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, data: result, message } = data;

    // 这里逻辑可以根据项目进行修改
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    const hasSuccess =
      data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      let successMsg = message;

      if (isNull(successMsg) || isUnDef(successMsg) || isEmpty(successMsg))
        successMsg = sys.api.operationSuccess;

      if (options.successMessageMode === 'modal')
        Modal.success({ title: sys.api.successTip, content: successMsg });
      else if (options.successMessageMode === 'message')
        await Message.success(successMsg);

      return result;
    }

    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    let timeoutMsg = '';
    switch (code) {
      case ResultEnum.TIMEOUT:
        // const tokenRefresher = new TokenRefresher()
        // await tokenRefresher.refreshToken(res, createAxiosOptions, axiosInstance, timeoutMsg)
        timeoutMsg = sys.api.apiTimeoutMessage;
        break;
      default:
        if (message) timeoutMsg = message;
    }
    // errorMessageMode='modal'的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    if (options.errorMessageMode === 'modal')
      Modal.error({ title: sys.api.errorTip, content: timeoutMsg });

    if (options.errorMessageMode === 'message') {
      // await Message.error(timeoutMsg)
    }

    throw new Error(timeoutMsg || sys.api.apiRequestFailed);
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const {
      apiUrl,
      joinPrefix,
      joinParamsToUrl,
      formatDate,
      joinTime = true,
      urlPrefix,
    } = options;
    if (joinPrefix) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    const data = config.data || false;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    formatDate && data && !isString(data) && formatRequestDate(data);
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(
          params || {},
          joinTimestamp(joinTime, false),
        );
      } else {
        // 兼容restful风格
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        config.url = `${config.url + params}${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else if (!isString(params)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      formatDate && formatRequestDate(params);
      if (
        Reflect.has(config, 'data') &&
        config.data &&
        (Object.keys(config.data).length > 0 || config.data instanceof FormData)
      ) {
        config.data = data;
        config.params = params;
      } else {
        // 非GET请求如果没有提供data，则将params视为data
        config.data = params;
        config.params = undefined;
      }
      if (joinParamsToUrl)
        config.url = setObjToUrlParams(config.url as string, {
          ...config.params,
          ...config.data,
        });
    } else {
      // 兼容restful风格
      config.url += params;
      config.params = undefined;
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  requestInterceptors: (config) => {
    // 请求之前处理config
    // const token = getToken()
    // if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
    //   // jwt token
    //
    //   ;(config as Recordable).headers.Authorization = options.authenticationScheme
    //     ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    //       `${options.authenticationScheme} ${token}`
    //     : token
    // }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  responseInterceptorsCatch: (
    axiosInstance: AxiosInstance,
    error: any,
  ): Promise<any> => {
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    if (axios.isCancel(error)) return Promise.reject(error);

    try {
      if (code === 'ECONNABORTED' && message.includes('timeout'))
        errMessage = sys.api.apiTimeoutMessage;

      if (err?.includes('Network Error'))
        errMessage = sys.api.networkExceptionMsg;

      if (errMessage) {
        if (errorMessageMode === 'modal')
          Modal.error({ title: sys.api.errorTip, content: errMessage });
        else if (errorMessageMode === 'message') void Message.error(errMessage);

        return Promise.reject(error);
      }
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      throw new Error(error as unknown as string);
    }

    checkStatus(error?.response?.status, msg, errorMessageMode);

    // 添加自动重试机制 保险起见 只针对GET请求
    const retryRequest = new AxiosRetry();
    const { isOpenRetry } = config.requestOptions.retryRequest;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    config.method?.toUpperCase() === RequestEnum.GET &&
      isOpenRetry &&
      // @ts-expect-error
      retryRequest.retry(axiosInstance, error);
    return Promise.reject(error);
  },
};
// const useStore = useUserStoreWithOut()
function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    // 深度合并
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // authentication schemes，e.g: Bearer
        // authenticationScheme: 'Bearer',
        authenticationScheme: 'Bearer',
        timeout: 60 * 1000,
        // 基础接口地址
        // baseURL: globSetting.apiUrl,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform: clone(transform),
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'message',
          // 接口地址
          apiUrl: 'http://localhost:3001',
          // 接口拼接地址
          urlPrefix: '',
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: false,
          retryRequest: {
            isOpenRetry: true, // 是否开启重试
            count: 5, // 重试次数
            waitTime: 100, // 重试间隔时间
          },
        },
      },
      opt || {},
    ),
  );
}

export const defHttp = createAxios();

// other api url
// export const otherHttp = createAxios({
//   requestOptions: {
//     apiUrl: 'xxx',
//     urlPrefix: 'xxx',
//   },
// });
