// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/dbConnect";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PUT") {
    const messages = (
      await db.query(
        // `ALTER TABLE messages ADD COLUMN ID SERIAL PRIMARY KEY;`
        `select * FROM messages`
      )
    ).rows;
    res.json({ result: messages, isSuccess: true });
  }
}
