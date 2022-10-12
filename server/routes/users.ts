import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
const router = express.Router();

const usersRoutes = (db: Pool) => {
  router.get("/", async (req, res) => {
    const users = await db.query("SELECT username, email, url FROM users");

    res.send(users.rows);
  });

  router.get("/:email", async (req, res) => {
    const { email } = req.params;
    const user = (await db.query(`SELECT * FROM users WHERE email=$1`, [email]))
      .rows[0];
    res.send(user);
  });

  router.put("/:userEmail", async (req, res) => {
    const { userEmail } = req.params;
    const { email, username, url } = req.body;

    const user = (
      await db.query(`SELECT * FROM users WHERE email=$1`, [userEmail])
    ).rows[0];

    if (!user) {
      return res.status(403).send("Email does not exist");
    }

    const updatedUser = (
      await db.query(
        `UPDATE users SET email=$1, username=$2, url=$3 WHERE email=$4 RETURNING email, username, url;`,
        [email, username, url, userEmail]
      )
    ).rows[0];

    res.send(updatedUser);
  });

  router.delete("/:email", async (req, res) => {
    const { email } = req.params;

    // Delete user
    const response = await db.query(`DELETE FROM users WHERE email=$1;`, [
      email,
    ]);
    await db.query(`DELETE FROM users WHERE email IS NULL;`);
    res.send(response.rows);
  });
  return router;
};

export default usersRoutes;
