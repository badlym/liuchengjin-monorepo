import { defHttp } from '@/utils/http/axios'

enum Api {
  Order = '/orders',
}

export const findAllApi = (query: { page?: number; limit?: number; name?: string }) => {
  return defHttp.get({
    url: Api.Order,
    params: query,
  })
}
export const createApi = (data: any) => {
  return defHttp.post({
    url: Api.Order,
    data,
  })
}

export const updateByIdApi = (data: any) => {
  return defHttp.put({
    url: `${Api.Order}/${data.id}`,
    data,
  })
}
export const deleteByIdApi = (id: number) => {
  return defHttp.delete({
    url: `${Api.Order}/${id}`,
  })
}
