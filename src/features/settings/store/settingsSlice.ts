import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ISettingsSlice} from './types';

const initialState: ISettingsSlice = {
  theme: 'light',
  lang: 'ru',
};

const exampleSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, {payload}: PayloadAction<string>) => {
      state.theme = payload;
    },
    changeLang: (state, {payload}: PayloadAction<string>) => {
      state.lang = payload;
    },
  },
});

export const {changeTheme, changeLang} = exampleSlice.actions;
export default exampleSlice.reducer;
