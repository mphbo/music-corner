import express from "express";
import { Pool } from "pg";
const router = express.Router();

const usersRoutes = (db: Pool) => {
  router.get("/", async (req, res) => {
    const users = await db.query("SELECT * from users");

    res.send(users.rows);
  });

  router.get("/:email", async (req, res) => {
    const { email } = req.params;
    const user = await db.query(`SELECT * FROM users WHERE email=${email}`);
    res.send(user.rows);
  });

  router.post("/", async (req, res) => {
    const { email } = req.body;

    db.query("INSERT INTO users(number) VALUES($1)", [email]);

    res.send({ working: true });
  });
  return router;
};

export default usersRoutes;
