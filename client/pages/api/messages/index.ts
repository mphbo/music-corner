import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";
import { Message } from "../../../types/Message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<Message[] | null>>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const messages: Message[] = (
      await db.query("SELECT * FROM messages WHERE sender=$1 OR receiver=$1", [
        id,
      ])
    ).rows;

    res.json({ result: messages, isSuccess: true });
  }

  if (req.method === "POST") {
    const { sender, receiver, content } = req.body;

    const message = await (
      await db.query(
        "INSERT INTO messages (sender, receiver, content) VALUES($1, $2, $3) returning *;",
        [sender, receiver, content]
      )
    ).rows[0];

    res.json({ result: message, isSuccess: true });
  }
}
