import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ServiceResponse } from "../../../types/service-response";
import { User } from "../../../types/User";
import { Messages } from "../../../types/messages";
import { db } from "../../../utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse<User | null>>
) {
  const { id } = req.query;
  if (req.method === "GET") {
    const user = (await db.query(`SELECT * FROM users WHERE id=$1`, [id]))
      .rows[0];
    res.json({ result: user, isSuccess: true });
  }
  if (req.method === "PUT") {
    const { email, username, url } = req.body;

    const users = (
      await db.query(
        `SELECT * FROM users WHERE id=$1 OR email=$2 OR username=$3`,
        [id, email, username]
      )
    ).rows;

    if (users.find((user) => user.username === username && user.id !== id)) {
      return res.status(403).json({
        result: null,
        isSuccess: false,
        message: Messages.USERNAME_ALREADY_EXISTS,
      });
    }

    if (
      users.find((user) => {
        return user.id !== id && user.email === email;
      })
    ) {
      return res.status(403).json({
        result: null,
        isSuccess: false,
        message: Messages.EMAIL_ALREADY_EXISTS,
      });
    }

    const updatedUser = (
      await db.query(
        `UPDATE users SET email=$1, username=$2, url=$3 WHERE id=$4 RETURNING email, username, url;`,
        [email, username, url, id]
      )
    ).rows[0];

    res.json({ result: updatedUser, isSuccess: true });
  }

  if (req.method === "DELETE") {
    // Delete user
    const response = (await db.query(`DELETE FROM users WHERE id=$1;`, [id]))
      .rows;
    res.json({ result: null, isSuccess: true });
  }
}
