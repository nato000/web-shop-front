import { apiCaller } from '../utils/api-caller';
import { AxiosResponse } from 'axios';

export const getUsersApi = async (): Promise<AxiosResponse> =>
  apiCaller({
    method: 'get',
    url: '/client/current-client',
  });

export const userSignIn = async (data): Promise<AxiosResponse> =>
  apiCaller({
    method: 'post',
    url: '/auth/user-sign-in',
    data: data,
  });

export const userSignUp = async (data): Promise<AxiosResponse> =>
  apiCaller({
    method: 'post',
    url: '/auth/user-sign-up',
    data: data,
  });

export const requestPasswordReset = async (data): Promise<AxiosResponse> =>
  apiCaller({
    method: 'post',
    url: '/auth/user-reset-password-request',
    data: data,
  });

export const passwordReset = async (token, data): Promise<AxiosResponse> =>
  apiCaller({
    method: 'post',
    url: `/auth/user-reset-password/${token}`,
    data: data,
  });
