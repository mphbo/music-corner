import { IMessage } from "../types/Message";

export const filterMessages = (messages: IMessage[], id: number) => {
  const messagesToReturn: IMessage[] = [];
  const filteredMessages = messages
    .sort((a: IMessage, b: IMessage) => b.time - a.time)
    .filter(
      (message: IMessage) => message.sender === id || message.receiver === id
    );

  filteredMessages.forEach((message: IMessage) => {
    const otherId = message.sender !== id ? message.sender : message.receiver;
    if (
      !messagesToReturn.find(
        (m: IMessage) => m.sender === otherId || m.receiver === otherId
      )
    ) {
      messagesToReturn.push(message);
    }
  });
  return messagesToReturn;
};
