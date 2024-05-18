import { defHttp } from '@/utils/http/axios'

enum Api {
  Order = '/orders',
}

export function findAllApi(query: { page?: number, limit?: number, name?: string }) {
  return defHttp.get({
    url: Api.Order,
    params: query,
  })
}
export function createApi(data: any) {
  return defHttp.post({
    url: Api.Order,
    data,
  })
}

export function updateByIdApi(data: any) {
  return defHttp.put({
    url: `${Api.Order}/${data.id}`,
    data,
  })
}
export function deleteByIdApi(id: number) {
  return defHttp.delete({
    url: `${Api.Order}/${id}`,
  })
}
