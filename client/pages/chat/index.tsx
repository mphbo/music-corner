import { Box } from "grommet";
import { Login, User } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { ChatList } from "./components/ChatList";
import { UserList } from "./components/UserList";
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
