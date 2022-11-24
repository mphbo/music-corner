import { Box } from "grommet";
import { Login, User } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { ChatList } from "./ChatList";
import { UserList } from "./UserList";
import styles from "../styles/Chat.module.scss";
import axios from "axios";

const ChatBox: NextPage = (props) => {
  console.log("PROPS =====>", props);
  return (
    <Box>
      {/* horizontal user list */}
      {/* <UserList />
      {/* vertical chat list */}
      {/* <ChatList /> */} */}
    </Box>
  );
};

// export async function getStaticProps(context: any) {
//   const { params } = context;
//   const id = params.id;

//   const getMessagesById = (id: number) => {
//     let messages;
//     axios
//       .get(`/api/messages?id=${id}`)
//       .then(({ data: { result } }) => {
//         console.log("messageResult:", result);
//         messages = result;
//       })
//       .catch(
//         ({
//           response: {
//             data: { message },
//           },
//         }) => console.log(message)
//       );
//     return messages;
//   };

//   const messages = getMessagesById(id);

//   return {
//     props: {
//       messages,
//     },
//   };
// }

// export async function getStaticPaths = () => {
//     const
// }

export default ChatBox;
