import keys from "./keys";

// Express App Setup
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
import { Pool } from "pg";
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query(
      "CREATE TABLE IF NOT EXISTS users (username varchar(255), email varchar(255), url varchar(255), passwordhash varchar(255))"
    )
    .catch((err) => console.error(err));
});

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});
app.delete("/users/", async (req, res) => {
    // Delete user
    const response = await pgClient.query(`DELETE FROM users WHERE email=;`);
    res.send(response.rows);
  });
)

import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";

app.use("/users", usersRoutes(pgClient));
app.use("/auth", authRoutes(pgClient));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
