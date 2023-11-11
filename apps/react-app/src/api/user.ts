import { defHttp } from '@/utils/http/axios'

enum Api {
  User = '/users',
}

export const findAllApi = (query: { page?: number; limit?: number }) => {
  return defHttp.get({
    url: Api.User,
    params: query,
  })
}
export const create = () => {}
