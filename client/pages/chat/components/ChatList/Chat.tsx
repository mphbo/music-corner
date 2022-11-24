import { Avatar, Box, Text } from "grommet";
import { useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { IMessage } from "../../../../types/Message";
import keys from "../../../../utils/keys";
import styles from "./styles/ChatList.module.scss";

function Chat({ message }: { message: IMessage }) {
  const [session, loading] = useSession();
  const otherUser =
    message.receiver !== session?.id ? message.receiver : message.sender;
  return (
    <Link href={`/chat/${otherUser}`}>
      <Box direction="row" width="full" gap="medium" pad="medium">
        <Avatar
          src={`https://res.cloudinary.com/${keys.cloudName}/image/upload/c_fill,h_60,w_60/d_shwackcloud:horse.jpg/shwackcloud/${otherUser}.jpg`}
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
            <Text>{otherUser}</Text>
            <Text truncate>{message.content}</Text>
          </Box>
          <Text>{`${Math.round(
            (Date.now() - message.time) / (1000 * 60)
          )} min`}</Text>
        </Box>
      </Box>
    </Link>
  );
}

export default Chat;
