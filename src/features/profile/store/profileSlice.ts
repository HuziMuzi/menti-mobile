import {createSlice} from '@reduxjs/toolkit';

import {IProfileSlice} from './types';

import api from '@app/api';

const {
  getAllPresentations,
  createPresentation,
  deletePresentation,
  updatePresentation,
} = api.presentation;

const initialState: IProfileSlice = {
  presentations: [],
  presentation: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllPresentations.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllPresentations.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.presentations = action.payload;
      })
      .addCase(getAllPresentations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.statusCode;
      })

      .addCase(createPresentation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPresentation.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.presentation = action.payload;
      })
      .addCase(createPresentation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.statusCode;
      })

      .addCase(deletePresentation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePresentation.fulfilled, state => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deletePresentation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.statusCode;
      })

      .addCase(updatePresentation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePresentation.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.presentation = action.payload;
      })
      .addCase(updatePresentation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.statusCode;
      });
  },
});

export default profileSlice.reducer;
