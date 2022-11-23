import { Avatar, Box, Text } from "grommet";
import React from "react";
import { Message } from "../../../types/Message";
import styles from "./styles/ChatList.module.scss";

function Chat({ message }: { message: Message }) {
  return (
    <Box direction="row" width="full" gap="medium" pad="medium">
      <Avatar
        src={
          "https://www.svg.com/img/gallery/this-lord-of-the-rings-character-is-getting-his-own-game/intro-1578339463.jpg"
        }
        className={styles.avatar}
      />
      <Box
        direction="row"
        align="center"
        justify="between"
        width="full"
        gap="large"
      >
        <Box direction="column">
          <Text>{message.sender}</Text>
          <Text truncate>{message.content}</Text>
        </Box>
        <Text>{message.time}</Text>
      </Box>
    </Box>
  );
}

export default Chat;
