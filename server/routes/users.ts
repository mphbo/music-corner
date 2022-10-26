import express, { Response as ExpressResponse } from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
import { formatResponse } from "../helpers/formatResponse";
import { ServiceResponse } from "../types/ServiceResponse";
import { User } from "../types/User";
import { Messages } from "../constants/messages";
const router = express.Router();

const usersRoutes = (db: Pool) => {
  router.get(
    "/",
    async (req, res: ExpressResponse<ServiceResponse<User[]>>) => {
      const users: User[] = (
        await db.query("SELECT username, email, url FROM users")
      ).rows;

      res.json({ result: users, isSuccess: true });
    }
  );

  router.get(
    "/:email",
    async (req, res: ExpressResponse<ServiceResponse<User>>) => {
      const { email } = req.params;
      const user = (
        await db.query(`SELECT * FROM users WHERE email=$1`, [email])
      ).rows[0];
      res.json({ result: user, isSuccess: true });
    }
  );

  router.put(
    "/:userEmail",
    async (req, res: ExpressResponse<ServiceResponse<User>>) => {
      const { userEmail } = req.params;
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
  );

  router.delete("/:email", async (req, res) => {
    const { email } = req.params;

    // Delete user
    const response = (
      await db.query(`DELETE FROM users WHERE email=$1;`, [email])
    ).rows;
    res.json({ result: response, isSuccess: true });
  });
  return router;
};

export default usersRoutes;
