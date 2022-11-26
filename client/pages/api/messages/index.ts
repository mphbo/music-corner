import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";
import { IMessage } from "../../../types/Message";

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === "GET") {
    const { userId, otherId } = req.query;
    let messages;
    console.log("userId ====>", userId);
    console.log("otherId ====>", otherId);
    if (userId === otherId) {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE sender=$1 AND receiver=$1",
          [userId]
        )
      ).rows;
    } else if (otherId) {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE (sender=$1 AND receiver=$2) OR (sender=$2 OR receiver=$1)",
          [userId, otherId]
        )
      ).rows;
    } else {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE sender=$1 OR receiver=$1",
          [userId]
        )
      ).rows;
    }

    res.json({ result: messages, isSuccess: true });
  }

  if (req.method === "POST") {
    const { sender, receiver, content, time } = req.body;

    const message = await (
      await db.query(
        "INSERT INTO messages (sender, receiver, content, time) VALUES($1, $2, $3, $4) returning *;",
        [sender, receiver, content, time]
      )
    ).rows[0];

    if (res.socket.server.io) {
      console.log("Already set up");
      res.end();
      return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const onConnection = (socket: any) => {
      const createdMessage = (msg: any) => {
        socket.broadcast.emit("new-message", msg);
      };

      console.log("MESSAGE:", message);

      socket.on("message", createdMessage(message));
    };

    // Define actions inside
    io.on("connection", onConnection);

    console.log("Setting up socket");
    res.end();

    res.json({ result: message, isSuccess: true });
  }
}
