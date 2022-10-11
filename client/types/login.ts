export interface IFormData {
  email: string;
  password: string;
}

export interface IError {
  isError: boolean;
  description: string;
}

export interface IErrors {
  email: IError;
  password: IError;
}
