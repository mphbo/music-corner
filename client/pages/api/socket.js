import { Server } from "socket.io";
export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const url =
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "https://music-corner.vercel.app/";
  console.log(url, process.env.NODE_ENV);

  const io = new Server(res.socket.server, {
    cors: {
      origin: url,
    },
  });
  res.socket.server.io = io;

  const onConnection = (socket) => {
    console.log("on-connection");
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
