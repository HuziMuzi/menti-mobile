import makeRequest from '@app/api/makeRequest';
import config from '@app/api/config';
import {ITokenAuth, ITokenAuthRequest} from '@app/api/rest/auth/type';

const tokenAuth = async (data: ITokenAuth) => {
  try {
    const response = await makeRequest<ITokenAuthRequest>({
      url: `${config.baseUrl}/auth/token`,
      method: 'POST',
      data,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default tokenAuth;
