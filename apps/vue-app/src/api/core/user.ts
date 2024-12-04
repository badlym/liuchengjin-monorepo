import { requestClient as request } from '@/api/request';

enum Api {
  User = '/users',
}

export function findAllApi(query: {
  page?: number;
  limit?: number;
  name?: string;
}) {
  return request.get(Api.User, {
    params: query,
  });
}
export function createApi(data: any) {
  return request.post(Api.User, data);
}

export function updateByIdApi(data: any) {
  return request.put(`${Api.User}/${data.id}`, data);
}
export function deleteByIdApi(id: number) {
  return request.delete(`${Api.User}/${id}`);
}
