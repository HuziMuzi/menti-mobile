export interface IFormInput {
  email: string;
  password: string;
}

export type IFormValuesNames =
  | 'email'
  | 'password'
  | ('email' | 'password')[]
  | readonly ('email' | 'password')[]
  | undefined;
