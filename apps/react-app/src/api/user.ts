import { defHttp } from '@/utils/http/axios'

enum Api {
  User = '/users',
}

export function findAllApi(query: { page?: number, limit?: number, name?: string }) {
  return defHttp.get({
    url: Api.User,
    params: query,
  })
}
export function createApi(data: any) {
  return defHttp.post({
    url: Api.User,
    data,
  })
}

export function updateByIdApi(data: any) {
  return defHttp.put({
    url: `${Api.User}/${data.id}`,
    data,
  })
}
export function deleteByIdApi(id: number) {
  return defHttp.delete({
    url: `${Api.User}/${id}`,
  })
}
