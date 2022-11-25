import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";
import { IMessage } from "../../../types/Message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<IMessage[] | null>>
) {
  if (req.method === "GET") {
    const { userId, otherId } = req.query;
    let messages;
    console.log("userId ====>", userId);
    console.log("otherId ====>", otherId);
    if (otherId) {
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

    res.json({ result: message, isSuccess: true });
  }
}
