import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";
import keys from "../../../utils/keys";

const { appId, key, secret, cluster } = keys;
const pusher = new Pusher({
  appId,
  key,
  secret,
  cluster,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { userId, otherId, top, skip } = req.query;
    let messages;
    if (userId === otherId) {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE sender=$1 AND receiver=$1 ORDER BY id LIMIT $2 OFFSET $3",
          [userId, top, skip]
        )
      ).rows;
    } else if (otherId) {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE (sender=$1 AND receiver=$2) OR (sender=$2 AND receiver=$1) ORDER BY id LIMIT $3 OFFSET $4",
          [userId, otherId, top, skip]
        )
      ).rows;
    } else {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE sender=$1 OR receiver=$1 ORDER BY id LIMIT $2 OFFSET $3",
          [userId, top, skip]
        )
      ).rows;
    }

    res.json({ result: messages, isSuccess: true });
  }

  if (req.method === "POST") {
    const { sender, receiver, content, time } = req.body;

    let message;
    try {
      message = await (
        await db.query(
          "INSERT INTO messages (sender, receiver, content, time) VALUES($1, $2, $3, $4) returning *;",
          [sender, receiver, content, time]
        )
      ).rows[0];
    } catch (e) {
      return res.status(500).json({
        result: null,
        isSuccess: false,
        message: Messages.ERROR_SENDING_MESSAGE,
      });
    }

    pusher.trigger("chat", "message", message);
    res.json({ result: message, isSuccess: true });
  }
}
