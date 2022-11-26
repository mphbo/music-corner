import { Box } from "grommet";
import type { NextPage } from "next";
import ChatList from "./components/ChatList";
import UserList from "./components/UserList";

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
