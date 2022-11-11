import { Avatar, Box, Button, Text, Tip } from "grommet";
import styles from "./styles/ChatList.module.scss";

export const ChatList = () => {
  const messages = [
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
    return (
      <Box direction="row" width="full" gap="medium" pad="medium">
        <Avatar src={message.avatar} className={styles.avatar} />
        <Box
          direction="row"
          align="center"
          justify="between"
          width="full"
          gap="large"
        >
          <Box direction="column">
            <Text>{message.username}</Text>
            <Text truncate>{message.content}</Text>
          </Box>
          <Text>{message.time}</Text>
        </Box>
      </Box>
    );
  });
  return (
    <Box direction="column" gap="small" margin="small">
      {chatListItems}
    </Box>
  );
};
