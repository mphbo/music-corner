import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<User[] | null>>
) {
  if (req.method === "GET") {
    const users: User[] = (
      await db.query("SELECT username, email, url FROM users")
    ).rows;

    res.json({ result: users, isSuccess: true });
  }
}
