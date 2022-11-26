import { Server } from "socket.io";
export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    const createdMessage = (msg) => {
      socket.broadcast.emit("new-message", msg);
    };

    socket.on("message", createdMessage);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
