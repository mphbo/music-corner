export const formatResponse = (
  result: any,
  isSuccess: boolean = true,
  message: string = ""
) => {
  return {
    result,
    isSuccess,
    message,
  };
};
