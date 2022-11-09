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
  if (req.method === "GET") {
    const { email } = req.query;
    console.log("email =====>", email);
    const user = (await db.query(`SELECT * FROM users WHERE email=$1`, [email]))
      .rows[0];
    console.log("user =====>", user);
    res.json({ result: user, isSuccess: true });
  }
  if (req.method === "PUT") {
    const { email: userEmail } = req.query;
    const { email, username, url } = req.body;

    const users = (
      await db.query(
        `SELECT * FROM users WHERE email=$1 OR email=$2 OR username=$3`,
        [userEmail, email, username]
      )
    ).rows;

    if (
      users.find(
        (user) => user.username === username && user.email !== userEmail
      )
    ) {
      return res.status(403).json({
        result: null,
        isSuccess: false,
        message: Messages.USERNAME_ALREADY_EXISTS,
      });
    }

    if (
      users.find((user) => user.email !== userEmail && user.email === email)
    ) {
      return res.status(403).json({
        result: null,
        isSuccess: false,
        message: Messages.EMAIL_ALREADY_EXISTS,
      });
    }

    const updatedUser = (
      await db.query(
        `UPDATE users SET email=$1, username=$2, url=$3 WHERE email=$4 RETURNING email, username, url;`,
        [email, username, url, userEmail]
      )
    ).rows[0];

    res.json({ result: updatedUser, isSuccess: true });
  }

  if (req.method === "DELETE") {
    const { email } = req.query;

    // Delete user
    const response = (
      await db.query(`DELETE FROM users WHERE email=$1;`, [email])
    ).rows;
    res.json({ result: null, isSuccess: true });
  }
}
