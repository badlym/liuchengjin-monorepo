/**
 * 该文件可自行根据业务逻辑进行调整
 */
import type { HttpResponse } from '@liuchengjin/request';

import {
  errorMessageResponseInterceptor,
  RequestClient,
} from '@liuchengjin/request';

import { message } from 'ant-design-vue';

function createRequestClient(baseURL: string) {
  const client = new RequestClient({
    baseURL,
  });

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async (config) => {
      return config;
    },
  });

  // response数据解构
  client.addResponseInterceptor<HttpResponse>({
    fulfilled: (response) => {
      const { data: responseData, status } = response;

      const { code, data } = responseData;

      if (status >= 200 && status < 400 && code === 0) {
        return data;
      }
      throw Object.assign({}, response, { response });
    },
  });

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(
    errorMessageResponseInterceptor((msg: string, error) => {
      // 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，而不是直接使用 message.error 提示 msg
      // 当前mock接口返回的错误字段是 error 或者 message
      const responseData = error?.response?.data ?? {};
      const errorMessage = responseData?.error ?? responseData?.message ?? '';
      // 如果没有错误信息，则会根据状态码进行提示
      message.error(errorMessage || msg);
    }),
  );

  return client;
}

export const requestClient = createRequestClient('http://localhost:3001');
