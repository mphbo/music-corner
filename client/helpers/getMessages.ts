import axios from "axios";

export const getMessages = async (userId: any = 0, otherId: number = 0) => {
  const result = await axios
    .get(
      otherId === 0
        ? `/api/messages?userId=${userId}`
        : `/api/messages?userId=${userId}&otherId=${otherId}`
    )
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
