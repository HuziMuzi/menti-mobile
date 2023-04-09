import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';

import {IErrorResponse} from './type';

import {getToken, updateTokens} from '@app/utils/utils';

const makeRequest = async <T>({
  headers = {},
  ...requestConfig
}: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  if (!headers.authorization) {
    return axios({
      headers,
      ...requestConfig,
    });
  }

  try {
    const token = await getToken('accessToken');
    headers = {
      ...headers,
      'Content-type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${token}`,
    };
    return await axios({
      headers,
      ...requestConfig,
    });
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (error.response?.status !== 401) {
      throw error;
    }

    await updateTokens();
    const token = await getToken('accessToken');
    headers = {
      ...headers,
      'Content-type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${token}`,
    };
    return await axios({
      headers,
      ...requestConfig,
    });
  }
};

export default makeRequest;
