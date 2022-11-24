import axios from "axios";
import { Avatar, Box, Button, Text, Tip } from "grommet";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { filterMessages } from "../../../helpers/filterChatList";
import { Message } from "../../../types/Message";
import Chat from "./Chat";
import styles from "./styles/ChatList.module.scss";

export const ChatList = () => {
  const [session, loading] = useSession();
  const [messages, setMessages] = useState<Message[] | []>([]);

  const createMessage = () => {
    const date = new Date().getTime();
    console.log("DATE:", date);
    axios
      .post(`/api/messages`, {
        content: "hello",
        sender: 1,
        receiver: 2,
        time: date,
      })
      .then(({ data: { result } }) => {
        console.log("messageResult:", result);
        // setMessages(result);
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => console.log(message)
      );
  };

  useEffect(() => {
    console.log("session:", session);
    axios
      .get(`/api/messages`)
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

    createMessage();

    console.log(new Date());
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

  const chatListItems = filterMessages(messages, 1).map(
    (chat: Message, index) => {
      console.log(`/chat/${chat.sender}`);
      return <Chat key={index} message={chat} />;
    }
  );

  return (
    <Box direction="column" gap="small" margin="small">
      {chatListItems}
    </Box>
  );
};
