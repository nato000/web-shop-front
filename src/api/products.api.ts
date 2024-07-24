import { apiCaller } from '../utils/api-caller';
import { AxiosResponse } from 'axios';

export const getProducts = async (): Promise<AxiosResponse> =>
  apiCaller({
    method: 'get',
    url: '/Product',
  });

export const getProductsById = async (id: string): Promise<AxiosResponse> =>
  apiCaller({
    method: 'get',
    url: `/Product/${id}`,
  });
