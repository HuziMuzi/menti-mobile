import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import makeRequest from '../../makeRequest';
import config from '../../config';

import {
  IPresentationInListResponse,
  IPresentationResponse,
  ICreatePresentationRequest,
  IUpdatePresentationRequest,
} from '@app/api/rest/presentation/type';
import {IErrorResponse} from '@app/api/type';

export const getAllPresentations = createAsyncThunk<
  IPresentationInListResponse[],
  undefined,
  {
    rejectValue: IErrorResponse;
  }
>('profile/getAllPresentations', async (_, {rejectWithValue}) => {
  try {
    const response = await makeRequest<IPresentationInListResponse[]>({
      url: `${config.baseUrl}/presentation`,
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

export const createPresentation = createAsyncThunk<
  IPresentationResponse,
  ICreatePresentationRequest,
  {
    rejectValue: IErrorResponse;
  }
>('profile/createPresentation', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<IPresentationResponse>({
      url: `${config.baseUrl}/presentation`,
      method: 'POST',
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

export const deletePresentation = createAsyncThunk<
  undefined,
  number | string,
  {
    rejectValue: IErrorResponse;
  }
>('profile/deletePresentation', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<undefined>({
      url: `${config.baseUrl}/presentation/${data}`,
      method: 'DELETE',
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

export const updatePresentation = createAsyncThunk<
  IPresentationResponse,
  IUpdatePresentationRequest,
  {
    rejectValue: IErrorResponse;
  }
>('profile/updatePresentation', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<IPresentationResponse>({
      url: `${config.baseUrl}/presentation/${data.id}`,
      method: 'PUT',
      headers: {
        authorization: true,
      },
      data: data.presentation,
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

export const getPresentation = createAsyncThunk<
  IPresentationResponse,
  string | number,
  {
    rejectValue: IErrorResponse;
  }
>('profile/getPresentation', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<IPresentationResponse>({
      url: `${config.baseUrl}/presentation/${data}`,
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

export const getPresentationByCode = createAsyncThunk<
  IPresentationResponse,
  string | number,
  {
    rejectValue: IErrorResponse;
  }
>('presentation/getPresentationByCode', async (data, {rejectWithValue}) => {
  try {
    const response = await makeRequest<IPresentationResponse>({
      url: `${config.baseUrl}/presentation/code/${data}`,
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
