import express, { Response as ExpressResponse } from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
import { formatResponse } from "../helpers/formatResponse";
import { ServiceResponse } from "../types/ServiceResponse";
import { User } from "../types/User";
import { Messages } from "../constants/messages";
const router = express.Router();

const authRoutes = (db: Pool) => {
  router.post(
    "/register",
    async (req, res: ExpressResponse<ServiceResponse<User>>) => {
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
  );

  router.post(
    "/login",
    async (req, res: ExpressResponse<ServiceResponse<User>>) => {
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
  );
  return router;
};

export default authRoutes;
