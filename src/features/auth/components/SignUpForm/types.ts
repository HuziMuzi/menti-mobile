export interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export type IFormValuesNames =
  | 'email'
  | 'name'
  | 'password'
  | ('email' | 'name' | 'password')[]
  | readonly ('email' | 'name' | 'password')[]
  | undefined;
