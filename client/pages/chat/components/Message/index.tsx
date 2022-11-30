import { Avatar, Box } from "grommet";
import React from "react";
import { IMessage } from "../../../../types/Message";
import keys from "../../../../utils/keys";
import { colors } from "../../../_app";
import User from "../UserList/User";
import styles from "./styles/Message.module.scss";

function Message({ message, id }: { message: IMessage; id: number }) {
  const isSender = id === message?.sender;
  return (
    <Box direction="row" alignSelf={isSender ? "start" : "end"}>
      {isSender && (
        <Avatar
          size="medium"
          margin="small"
          className={styles.avatar}
          src={`https://res.cloudinary.com/${keys.cloudName}/image/upload/c_fill,h_60,w_60/d_shwackcloud:horse.jpg/shwackcloud/${message?.sender}.jpg`}
        />
      )}
      <Box
        alignSelf="start"
        // justify="center"
        background={isSender ? "white" : colors.primary}
        className={isSender ? styles.sender : styles.receiver}
        pad="medium"
      >
        <Box>{message?.content}</Box>
      </Box>
      {!isSender && (
        <Avatar
          size="medium"
          margin="small"
          className={styles.avatar}
          src={`https://res.cloudinary.com/${keys.cloudName}/image/upload/c_fill,h_60,w_60/d_shwackcloud:horse.jpg/shwackcloud/${message?.sender}.jpg`}
        />
      )}
    </Box>
  );
}

export default Message;
