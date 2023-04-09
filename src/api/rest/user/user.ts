import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import makeRequest from '../../makeRequest';
import config from '../../config';

import {
  IRegisterUserResponse,
  ILoginUserResponse,
  ILogoutUserResponse,
  IGetUserResponse,
  IUpdateUserResponse,
  ILoginUserRequest,
  IUpdateUserRequest,
  IRegisterUserRequest,
} from '@app/api/rest/user/type';
import {IErrorResponse} from '@app/api/type';
import {RootState} from '@app/redux/store';
import {removeTokens, saveTokens} from '@app/utils/utils';

export const registerUser = createAsyncThunk<
  IRegisterUserResponse,
  IRegisterUserRequest,
  {
    rejectValue: IErrorResponse;
  }
>('user/register', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<ILoginUserResponse>({
      url: `${config.baseUrl}/user`,
      method: 'POST',
      data,
    });
    const {access_token, refresh_token} = response.data;
    await saveTokens(access_token, refresh_token);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk<
  ILoginUserResponse,
  ILoginUserRequest,
  {
    rejectValue: IErrorResponse;
    state: RootState;
  }
>('user/login', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<ILoginUserResponse>({
      url: `${config.baseUrl}/user/login`,
      method: 'POST',
      data,
    });
    const {access_token, refresh_token} = response.data;
    await saveTokens(access_token, refresh_token);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk<
  ILogoutUserResponse,
  undefined,
  {
    rejectValue: IErrorResponse;
  }
>('user/logout', async (_, {rejectWithValue}) => {
  try {
    const response = await makeRequest<ILogoutUserResponse>({
      url: `${config.baseUrl}/user/logout`,
      method: 'POST',
      headers: {
        authorization: true,
      },
    });
    await removeTokens();
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getUser = createAsyncThunk<
  IGetUserResponse,
  undefined,
  {
    rejectValue: IErrorResponse;
    state: RootState;
  }
>('user/get', async (_, {rejectWithValue, getState}) => {
  const {auth} = getState();
  try {
    const response = await makeRequest<IGetUserResponse>({
      url: `${config.baseUrl}/user/${auth.user?.id}`,
      headers: {
        authorization: true,
      },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

export const updateUser = createAsyncThunk<
  IUpdateUserResponse,
  IUpdateUserRequest,
  {
    rejectValue: IErrorResponse;
    state: RootState;
  }
>('user/update', async (data, {rejectWithValue, getState}) => {
  const {auth} = getState();
  try {
    const response = await makeRequest<IUpdateUserResponse>({
      url: `${config.baseUrl}/user/${auth.user?.id}`,
      method: 'PUT',
      headers: {
        authorization: true,
      },
      data,
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
