import { Box, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../types/Message";
import { getMessages } from "../../helpers/getMessages";
import Message from "./components/Message";
import { useSession } from "next-auth/react";
import { createMessage } from "../../helpers/createMessage";
import Pusher from "pusher-js";
import keys from "../../utils/keys";

const ChatBox: NextPage = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const [value, setValue] = useState<{ content: string }>({ content: "" });
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const otherId = typeof id === "string" ? parseInt(id) : 0;

  const endOfChatRef = useRef<any>(null);

  const scrollToBottom = () => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const pusher = new Pusher(keys.key, {
      cluster: keys.cluster,
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (message: IMessage) => {
      console.log("message received:", message);
      const fetchData = async () => {
        const messages = await getMessages(session?.id, otherId);
        setMessages(messages);
      };
      fetchData();
      // setMessages((prev) => {
      //   return prev.find((m: IMessage) => m.id === message.id)
      //     ? prev
      //     : [...prev, message];
      // });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
    const fetchData = async () => {
      const messages = await getMessages(session?.id, otherId);
      setMessages(messages);
    };
    fetchData();
  }, [otherId, session?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleReset = () => {
    setValue({ content: "" });
  };

  const handleSubmit = async (value: { content: string }) => {
    const time = new Date().getTime();
    const messageObject = {
      content: value.content,
      sender: session?.id,
      receiver: otherId,
      time,
    };
    const { isSuccess, result } = await createMessage(messageObject);
    if (isSuccess) {
      setMessages((prev) => [...prev, result]);
    }
    handleReset();
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
