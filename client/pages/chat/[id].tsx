import { Box, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../types/Message";
import { getMessages } from "../../helpers/getMessages";
import Message from "./components/Message";
import { useSession } from "next-auth/client";
import { createMessage } from "../../helpers/createMessage";

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const [value, setValue] = useState<{ message: string }>({ message: "" });
  const [session, loading] = useSession();
  const router = useRouter();
  const { id } = router.query;
  const otherId = typeof id === "string" ? parseInt(id) : 0;

  const endOfChatRef = useRef<any>(null);

  const scrollToBottom = () => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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

  const handleSubmit = async (value: { message: string }) => {
    console.log(value);
    const result = await createMessage(value.message, session?.id, otherId);
    console.log("result:", result);
    const messages = await getMessages(session?.id, otherId);
    setMessages(messages);
  };

  const handleReset = () => {
    setValue({ message: "" });
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
        <FormField label="message" name="message">
          <TextInput placeholder="type here" name="message" />
        </FormField>
      </Form>
      <div style={{ marginTop: 80 }} ref={endOfChatRef}></div>
    </Box>
  );
};

export default ChatBox;
