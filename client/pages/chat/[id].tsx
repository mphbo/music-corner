import { Box, Text } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IMessage } from "../../types/Message";
import { getMessages } from "../../helpers/getMessages";
import Message from "./components/Message";

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const router = useRouter();
  const { id } = router.query;
  const userId = typeof id === "string" ? parseInt(id) : 0;

  useEffect(() => {
    const fetchData = async () => {
      const messages = await getMessages(userId);
      setMessages(messages);
    };
    fetchData();
  }, []);

  console.log("id:", id);
  console.log("typeof id:", typeof id === "string");
  console.log("messages:", messages);

  const messageListItems = messages.map((message: IMessage) => {
    return <Message message={message} id={userId} />;
  });
  return (
    <Box>
      <Box overflow="scroll">{messageListItems}</Box>
      <Text>Hello</Text>
    </Box>
  );
};

export default ChatBox;
