import { requestClient as request } from '@/api/request';

enum Api {
  Order = '/orders',
}

export function findAllApi(query: {
  page?: number;
  limit?: number;
  name?: string;
}) {
  return request.get(Api.Order, {
    params: query,
  });
}
export function createApi(data: any) {
  return request.post(Api.Order, data);
}

export function updateByIdApi(data: any) {
  return request.put(`${Api.Order}/${data.id}`, data);
}
export function deleteByIdApi(id: number) {
  return request.delete(`${Api.Order}/${id}`);
}
