import {combineReducers} from '@reduxjs/toolkit';

import settingsSlice from '@features/settings/store/settingsSlice';
import profileSlice from '@features/profile/store/profileSlice';
import authSlice from '@features/auth/store/authSlice';
import presentationSlice from '@features/presentation/store/presentationSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
  profile: profileSlice,
  presentation: presentationSlice,
});

export default rootReducer;
