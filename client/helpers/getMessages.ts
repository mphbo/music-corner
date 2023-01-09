import axios from "axios";

const top = 15;

export const getMessages = async (
  userId: any = 0,
  otherId: number = 0,
  skip: number = 0
) => {
  const result = await axios
    .get(
      otherId === 0
        ? `/api/messages?userId=${userId}&top=${top}&skip=${skip}`
        : `/api/messages?userId=${userId}&otherId=${otherId}&top=${top}&skip=${skip}`
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
