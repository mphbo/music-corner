import axios from "axios";
import { IMessage } from "../types/Message";

export const createMessage = async ({
  content,
  sender,
  receiver,
  time,
}: any) => {
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
