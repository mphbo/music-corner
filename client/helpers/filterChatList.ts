import { Message } from "../types/Message";

export const filterMessages = (messages: Message[], id: number) => {
  const messagesToReturn: Message[] = [];
  const filteredMessages = messages
    .sort((a: Message, b: Message) => b.time - a.time)
    .filter(
      (message: Message) => message.sender === id || message.receiver === id
    );

  filteredMessages.forEach((message: Message) => {
    const otherId = message.sender !== id ? message.sender : message.receiver;
    console.log(otherId);
    if (
      !messagesToReturn.find(
        (m: Message) => m.sender === otherId || m.receiver === otherId
      )
    ) {
      messagesToReturn.push(message);
    }
  });
  console.log(messages);
  console.log(messagesToReturn);
  return messagesToReturn;
};
