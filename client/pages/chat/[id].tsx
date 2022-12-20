import { Box, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../types/Message";
import { getMessages } from "../../helpers/getMessages";
import Message from "./components/Message";
import { useSession } from "next-auth/react";
import { createMessage } from "../../helpers/createMessage";
import { socket } from "../../helpers/socket";
import axios from "axios";

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const [value, setValue] = useState<{ content: string }>({ content: "" });
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const otherId = typeof id === "string" ? parseInt(id) : 0;

  const endOfChatRef = useRef<any>(null);

  const scrollToBottom = () => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleNewMessage = async (data: any) => {
      console.log("new-message:", data);
      const incomingMessages = await getMessages(session?.id, otherId);
      setMessages(incomingMessages);
    };
    socket.on("new-message", handleNewMessage);
    socket.on("connect_error", (e) => {
      console.log(`connect_error due to ${e.message}`);
    });

    scrollToBottom();
    const fetchData = async () => {
      await axios.get("/api/socket");
      const messages = await getMessages(session?.id, otherId);
      setMessages(messages);
    };
    fetchData();

    return () => {
      socket.off("new-message", handleNewMessage);
    };
  }, [otherId, session?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (value: { content: string }) => {
    const time = new Date().getTime();
    const messageObject = {
      content: value.content,
      sender: session?.id,
      receiver: otherId,
      time,
    };
    const result = await createMessage(messageObject);
    socket.emit("message", messageObject);
    console.log("result:", result);
    const messages = await getMessages(session?.id, otherId);
    setMessages(messages);
    setValue({ content: "" });
  };

  const handleReset = () => {
    setValue({ content: "" });
  };

  const messageListItems = messages?.map((message: IMessage, index) => {
    return <Message key={index} message={message} id={otherId} />;
  });

  return (
    <Box>
      <Box overflow="scroll">{messageListItems}</Box>
      <Form
        value={value}
        onChange={setValue}
        onReset={handleReset}
        onSubmit={({ value }) => handleSubmit(value)}
      >
        <FormField label="message" name="content">
          <TextInput placeholder="type here" name="content" />
        </FormField>
      </Form>
      <div style={{ marginTop: 80 }} ref={endOfChatRef}></div>
    </Box>
  );
};

export default ChatBox;
