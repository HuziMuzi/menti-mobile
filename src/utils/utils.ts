import AsyncStorage from '@react-native-async-storage/async-storage';

import tokenAuth from '@app/api/rest/auth/auth';

export const saveTokens = async (access: string, refresh: string) => {
  await AsyncStorage.setItem('refreshToken', refresh);
  await AsyncStorage.setItem('accessToken', access);
};

export const getToken = async (name: string) => {
  const token = await AsyncStorage.getItem(name);
  return token;
};

export const removeTokens = async () => {
  await AsyncStorage.removeItem('refreshToken');
  await AsyncStorage.removeItem('accessToken');
};

export const updateTokens = async () => {
  const token = await AsyncStorage.getItem('refreshToken');

  if (typeof token === 'string') {
    const data = {refresh_token: token};
    const response = await tokenAuth(data);
    await saveTokens(response.access_token, response.refresh_token);
  }
};
