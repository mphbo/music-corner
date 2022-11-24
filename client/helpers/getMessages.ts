import axios from "axios";

export const getMessages = async (userId: any = 0, otherId: number = 0) => {
  console.log("userId:", userId, "otherId:", otherId);
  const result = await axios
    .get(
      otherId === 0
        ? `/api/messages?userId=${userId}`
        : `/api/messages?userId=${userId}&otherId=${otherId}`
    )
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
