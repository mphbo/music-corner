import axios from "axios";
import { Avatar, Box, Button, Text, Tip } from "grommet";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { filterMessages } from "../../../../helpers/filterChatList";
import { getMessages } from "../../../../helpers/getMessages";
import { IMessage } from "../../../../types/Message";
import Chat from "./Chat";
import styles from "./styles/ChatList.module.scss";

const ChatList = () => {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<IMessage[] | []>([]);

  useEffect(() => {
    console.log("session:", session);
    // createMessage();

    const fetchData = async () => {
      const messages = await getMessages(session?.id);
      setMessages(messages);
    };

    fetchData();
  }, []);

  const chatListItems = filterMessages(messages, 1).map(
    (chat: IMessage, index) => {
      return <Chat key={index} message={chat} />;
    }
  );

  return (
    <Box direction="column" gap="small" margin="small">
      {chatListItems}
    </Box>
  );
};

export default ChatList;
