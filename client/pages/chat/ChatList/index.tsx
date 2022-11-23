import axios from "axios";
import { Avatar, Box, Button, Text, Tip } from "grommet";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { Message } from "../../../types/Message";
import Chat from "./Chat";
import styles from "./styles/ChatList.module.scss";

export const ChatList = () => {
  const [session, loading] = useSession();
  const [messages, setMessages] = useState<Message[] | []>([]);
  useEffect(() => {
    console.log("session:", session);
    axios
      .get(`/api/messages?id=${session?.id}`)
      .then(({ data: { result } }) => {
        console.log("messageResult:", result);
        setMessages(result);
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => console.log(message)
      );
  }, []);

  const messagesx = [
    {
      username: "larry",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "asdf",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "test",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "hello",
      content: "Hello there, how are youare youare youare you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "larry",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "asdf",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "test",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "hello",
      content: "Hello there, how are youare youare youare you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
    {
      username: "world",
      content: "Hello there, how are you?",
      time: "4:59",
      avatar:
        "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg",
    },
  ];

  const chatListItems = messages.map((message, i) => {
    return <Chat message={message} key={i} />;
  });
  return (
    <Box direction="column" gap="small" margin="small">
      {chatListItems}
    </Box>
  );
};
