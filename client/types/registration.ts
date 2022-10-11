export interface IFormData {
  username: string;
  email: string;
  url: string;
  password: string;
  passwordConfirm: string;
}

export interface IError {
  isError: boolean;
  description: string;
}

export interface IErrors {
  username: IError;
  email: IError;
  url: IError;
  password: IError;
  passwordConfirm: IError;
}
