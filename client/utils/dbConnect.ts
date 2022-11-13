import keys from "./keys";
import { Pool } from "pg";

export const db = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: Number(keys.pgPort),
});

db.on("connect", (client) => {
  client
    .query(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), url VARCHAR(255), passwordhash VARCHAR(255))"
    )
    .catch((error) => console.error(error));
  client
    .query("DROP TABLE IF EXISTS messages")
    .catch((error) => console.error(error));
  client
    .query(
      "CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, sender INT, receiver INT, content TEXT, CONSTRAINT fk_sender FOREIGN KEY(sender) REFERENCES users(id) ON DELETE CASCADE, CONSTRAINT fk_receiver FOREIGN KEY(receiver) REFERENCES users(id) ON DELETE CASCADE)"
    )
    .catch((error) => console.error(error));
});
