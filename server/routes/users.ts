import express from "express";
import bcrypt from "bcrypt";
import { Pool } from "pg";
const router = express.Router();

const usersRoutes = (db: Pool) => {
  router.get("/", async (req, res) => {
    const users = await db.query("SELECT username, url FROM users");

    res.send(users.rows);
  });

  router.get("/:email", async (req, res) => {
    const { email } = req.params;
    const user = await db.query(`SELECT * FROM users WHERE email=${email}`);
    res.send(user.rows);
  });

  router.post("/", async (req, res) => {
    const { username, email, url, password } = req.body;

    const user = (
      await db.query(
        `SELECT * FROM users WHERE username='${username}' OR email='${email}'`
      )
    ).rows[0];

    if (user) {
      return user.email === email
        ? res.status(403).send("Email already exists")
        : res.status(403).send("Username already exists");
    }

    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, passwordhash) => {
        db.query(
          "INSERT INTO users (username, email, url, passwordhash) VALUES($1, $2, $3, $4)",
          [username, email, url, passwordhash]
        );
        if (!err) res.status(200).send({ username, email, url });
        else {
          res.status(500).send("Error creating account.");
        }
      });
    });
  });
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const users = (await db.query(`SELECT * FROM users WHERE email='${email}'`))
      .rows;
    if (users.length === 0) {
      res.status(403).send("Email does not exist.");
      return;
    }

    const user = users[0];
    const { username, url } = user;

    await bcrypt.compare(password, user.passwordhash, (err, result) => {
      err
        ? res.status(500).send("Error decrypting password.")
        : result === false
        ? res.status(401).send("Incorrect email/password combination.")
        : res.status(200).send({ email, username, url });
    });
  });
  return router;
};

export default usersRoutes;
