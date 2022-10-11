export interface IFormData {
  email: string;
  username: string;
  url: string;
}

export interface IError {
  isError: boolean;
  description: string;
}

export interface IErrors {
  email: IError;
  username: IError;
  url: IError;
}
