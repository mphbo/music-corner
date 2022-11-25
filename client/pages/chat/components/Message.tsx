import { Box } from "grommet";
import React from "react";
import { IMessage } from "../../../types/Message";
import { colors } from "../../_app";

function Message({ message, id }: { message: IMessage; id: number }) {
  const isUser = id === message.sender;
  return (
    <Box
      alignSelf={isUser ? "start" : "end"}
      background={isUser ? "white" : colors.primary}
      width="small"
      pad="large"
      round="xlarge"
      margin="xsmall"
    >
      {message.content}
    </Box>
  );
}

export default Message;
