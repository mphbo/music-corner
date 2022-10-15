import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
import { formatResponse } from "../helpers/formatResponse";
const router = express.Router();

const usersRoutes = (db: Pool) => {
  router.get("/", async (req, res) => {
    const users = (await db.query("SELECT username, email, url FROM users"))
      .rows;

    res.json(formatResponse(users, true));
  });

  router.get("/:email", async (req, res) => {
    const { email } = req.params;
    const user = (await db.query(`SELECT * FROM users WHERE email=$1`, [email]))
      .rows[0];
    res.json(formatResponse(user));
  });

  router.put("/:userEmail", async (req, res) => {
    const { userEmail } = req.params;
    const { email, username, url } = req.body;

    const users = (
      await db.query(
        `SELECT * FROM users WHERE email=$1 OR email=$2 OR username=$3`,
        [userEmail, email, username]
      )
    ).rows;

    // if (!!users.find((user) => user.email === userEmail)) {
    //   return res
    //     .status(403)
    //     .json(formatResponse("", false, "Email does not exist"));
    // }

    if (
      users.find(
        (user) => user.username === username && user.email !== userEmail
      )
    ) {
      return res
        .status(403)
        .json(formatResponse("", false, "Username already taken"));
    }

    if (
      users.find((user) => user.email !== userEmail && user.email === email)
    ) {
      return res
        .status(403)
        .json(formatResponse("", false, "Email already taken"));
    }

    const updatedUser = (
      await db.query(
        `UPDATE users SET email=$1, username=$2, url=$3 WHERE email=$4 RETURNING email, username, url;`,
        [email, username, url, userEmail]
      )
    ).rows[0];

    res.json(formatResponse(updatedUser));
  });

  router.delete("/:email", async (req, res) => {
    const { email } = req.params;

    // Delete user
    const response = (
      await db.query(`DELETE FROM users WHERE email=$1;`, [email])
    ).rows;
    res.json(formatResponse(response));
  });
  return router;
};

export default usersRoutes;
