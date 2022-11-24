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
    let messages;
    console.log("ID====>", id);
    if (id) {
      messages = (
        await db.query(
          "SELECT * FROM messages WHERE sender=$1 OR receiver=$1",
          [id]
        )
      ).rows;
    } else {
      messages = (await db.query("SELECT * FROM messages")).rows;
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
