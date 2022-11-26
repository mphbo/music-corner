import { Box, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../types/Message";
import { getMessages } from "../../helpers/getMessages";
import Message from "./components/Message";
import { useSession } from "next-auth/client";
import { createMessage } from "../../helpers/createMessage";
import io from "socket.io-client";
import axios from "axios";
let socket: any;

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const [value, setValue] = useState<{ content: string }>({ content: "" });
  const [session, loading] = useSession();
  const router = useRouter();
  const { id } = router.query;
  const otherId = typeof id === "string" ? parseInt(id) : 0;

  const endOfChatRef = useRef<any>(null);

  const scrollToBottom = () => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const socketInitializer = async () => {
    await axios.get("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("new-message", (msg: any) => {
      console.log("msg:", msg);
    });
    if (socket) return () => socket.disconnect();
  };

  useEffect(() => {
    socketInitializer();
    scrollToBottom();
    const fetchData = async () => {
      const messages = await getMessages(session?.id, otherId);
      setMessages(messages);
    };
    fetchData();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (value: { content: string }) => {
    console.log(value);
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
