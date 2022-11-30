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
  if (req.method === "POST") {
    const { username, email, url, password } = req.body;

    const user = (
      await db.query(`SELECT * FROM users WHERE username=$1 OR email=$2`, [
        username,
        email,
      ])
    ).rows[0];

    if (user) {
      return user.email === email
        ? res.status(403).json({
            result: null,
            isSuccess: false,
            message: Messages.EMAIL_ALREADY_EXISTS,
          })
        : res.status(403).json({
            result: null,
            isSuccess: false,
            message: Messages.USERNAME_ALREADY_EXISTS,
          });
    }

    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, passwordhash) => {
        db.query(
          "INSERT INTO users (username, email, url, passwordhash) VALUES($1, $2, $3, $4)",
          [username, email, url, passwordhash]
        );
        if (!err)
          res
            .status(200)
            .json({ result: { username, email, url }, isSuccess: true });
        else {
          res.status(500).json({
            result: null,
            isSuccess: false,
            message: Messages.ERROR_CREATING_ACCOUNT,
          });
        }
      });
    });
  }
}
