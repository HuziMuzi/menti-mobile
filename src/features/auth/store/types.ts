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

export interface IAuthState {
  displayName: string | null;
  email: string | null;
  isEmailVerified: boolean;
  isAuthenticated: boolean;
  isError: boolean;
  isLoadingAuth: boolean;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface IAuthSlice {
  isLoading: boolean;
  user: User | null;
  error: number | undefined | null;
}
