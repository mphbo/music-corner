import axios from "axios";

export const getMessages = async (id: number = 0) => {
  const result = await axios
    .get(id === 0 ? `/api/messages` : `/api/messages?id=${id}`)
    .then(({ data: { result } }) => {
      console.log("messageResult:", result);
      return result;
    })
    .catch(
      ({
        response: {
          data: { message },
        },
      }) => console.log(message)
    );
  console.log("result:", result);
  return result;
};
