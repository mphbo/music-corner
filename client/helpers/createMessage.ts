import axios from "axios";

export const createMessage = async (
  content: string,
  sender: any,
  receiver: number
) => {
  const time = new Date().getTime();
  const result = await axios
    .post(`/api/messages`, {
      content,
      sender,
      receiver,
      time,
    })
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
  return result;
};
