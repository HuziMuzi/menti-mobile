type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
};

export interface ILoginUserResponse {
  statusCode: number;
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface IRegisterUserResponse {
  statusCode: number;
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface ILogoutUserResponse {
  statusCode: number;
  message: string;
}

export interface IGetUserResponse {
  user: User;
}

export interface IUpdateUserResponse {
  user: User;
}

export interface ILoginUserRequest {
  email: string;
  password: string;
}

export interface IRegisterUserRequest {
  email: string;
  password: string;
  name: string;
  role?: undefined;
}

export interface IUpdateUserRequest {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  role?: {
    id: number;
  };
}
