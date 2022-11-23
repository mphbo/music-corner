import { Box } from "grommet";
import { Login, User } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { ChatList } from "./ChatList";
import { UserList } from "./UserList";
import styles from "../styles/Chat.module.scss";

const Chat: NextPage = () => {
  return (
    <Box>
      {/* horizontal user list */}
      <UserList />
      {/* vertical chat list */}
      <ChatList />
    </Box>
  );
};

export default Chat;
