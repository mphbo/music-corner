export interface ServiceResponse<t> {
  result: t;
  isSuccess?: boolean;
  message?: string;
}
