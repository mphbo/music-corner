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
      "CREATE TABLE IF NOT EXISTS users (username varchar(255), email varchar(255), url varchar(255), passwordhash varchar(255))"
    )
    .catch((error) => console.error(error));
});
