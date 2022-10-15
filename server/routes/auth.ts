import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
import { formatResponse } from "../helpers/formatResponse";
const router = express.Router();

const authRoutes = (db: Pool) => {
  router.post("/register", async (req, res) => {
    const { username, email, url, password } = req.body;

    const user = (
      await db.query(`SELECT * FROM users WHERE username=$1 OR email=$2`, [
        username,
        email,
      ])
    ).rows[0];

    if (user) {
      return user.email === email
        ? res
            .status(403)
            .json(formatResponse("", false, "Email already exists"))
        : res
            .status(403)
            .json(formatResponse("", false, "Username already exists"));
    }

    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, passwordhash) => {
        db.query(
          "INSERT INTO users (username, email, url, passwordhash) VALUES($1, $2, $3, $4)",
          [username, email, url, passwordhash]
        );
        if (!err)
          res.status(200).json(formatResponse({ username, email, url }));
        else {
          res
            .status(500)
            .json(formatResponse("", false, "Error creating account."));
        }
      });
    });
  });
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const users = (
      await db.query(`SELECT * FROM users WHERE email=$1`, [email])
    ).rows;
    if (users.length === 0) {
      res.status(403).json(formatResponse("", false, "Email does not exist."));
      return;
    }

    const user = users[0];
    const { username, url } = user;

    await bcrypt.compare(password, user.passwordhash, (err, result) => {
      err
        ? res
            .status(500)
            .json(formatResponse("", false, "Error decrypting password."))
        : result === false
        ? res
            .status(401)
            .json(
              formatResponse("", false, "Incorrect email/password combination.")
            )
        : res.status(200).json(formatResponse({ email, username, url }));
    });
  });
  return router;
};

export default authRoutes;
