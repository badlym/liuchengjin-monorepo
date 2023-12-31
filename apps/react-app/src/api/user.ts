import { defHttp } from '@/utils/http/axios'

enum Api {
  User = '/users',
}

export const findAllApi = (query: { page?: number; limit?: number; name?: string }) => {
  return defHttp.get({
    url: Api.User,
    params: query,
  })
}
export const createApi = (data: any) => {
  return defHttp.post({
    url: Api.User,
    data,
  })
}

export const updateByIdApi = (data: any) => {
  return defHttp.put({
    url: `${Api.User}/${data.id}`,
    data,
  })
}
export const deleteByIdApi = (id: number) => {
  return defHttp.delete({
    url: `${Api.User}/${id}`,
  })
}
