import {createSlice} from '@reduxjs/toolkit';

import {IPresentationSlice} from './types';

import api from '@app/api';

const {getPresentationByCode} = api.presentation;

const initialState: IPresentationSlice = {
  presentation: null,
  isLoading: false,
  error: null,
};

const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPresentationByCode.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPresentationByCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.presentation = action.payload;
      })
      .addCase(getPresentationByCode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.statusCode;
      });
  },
});

export default presentationSlice.reducer;
