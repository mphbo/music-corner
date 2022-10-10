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
    const user = await db.query(`SELECT * FROM users WHERE email=${email}`);
    res.send(user.rows);
  });

  router.delete("/:email", async (req, res) => {
    const { email } = req.params;

    // Delete user
    const response = await db.query(`DELETE FROM users WHERE email=${email}`);
    res.send(response.rows);

    // Return all users that still exist
    const users = await db.query("SELECT username, url FROM users");
    res.send(users.rows);
  });
  return router;
};

export default usersRoutes;
