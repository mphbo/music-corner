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
    const { email, password } = req.body;

    const users = (
      await db.query(`SELECT * FROM users WHERE email=$1`, [email])
    ).rows;
    if (users.length === 0) {
      res.status(403).json({
        result: null,
        isSuccess: false,
        message: Messages.EMAIL_DOES_NOT_EXIST,
      });
      return;
    }

    const user = users[0];
    const { username, url } = user;

    await bcrypt.compare(password, user.passwordhash, (err, result) => {
      err
        ? res.status(500).json({
            result: null,
            isSuccess: false,
            message: Messages.ERROR_DECRYPTING_PASSWORD,
          })
        : result === false
        ? res.status(401).json({
            result: null,
            isSuccess: false,
            message: Messages.INCORRECT_EMAIL_PASSWORD_COMBINATION,
          })
        : res
            .status(200)
            .json({ result: { email, username, url }, isSuccess: true });
    });
  }
}
