import axios from "axios";

export const getUser = async (id: any = 0) => {
  const result = await axios
    .get(`/api/users/${id}`)
    .then(({ data: { result } }) => {
      return result;
    })
    .catch(
      ({
        response: {
          data: { message },
        },
      }) => console.log(message)
    );
  return result;
};
