import { Avatar, Box, Button, Text, Tip } from "grommet";

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
  ];

  const chatListItems = messages.map((message, i) => {
    console.log(i);
    return (
      <Box direction="row" width="full" gap="medium">
        <Button
          key={i}
          icon={<Avatar src={message.avatar} />}
          tip={{
            dropProps: { align: { bottom: "bottom" } },
            content: message.username,
          }}
        />
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
    <Box direction="column" gap="small" margin="large">
      {chatListItems}
    </Box>
  );
};
