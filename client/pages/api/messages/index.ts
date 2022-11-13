import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<Message[] | null>>
) {
  if (req.method === "GET") {
    const messages: Message[] = (await db.query("SELECT * FROM messages")).rows;

    res.json({ result: messages, isSuccess: true });
  }
}
