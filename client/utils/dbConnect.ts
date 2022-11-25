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
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), url VARCHAR(255), passwordhash VARCHAR(255))"
    )
    .catch((error) => console.error(error));
  // client
  //   .query("DROP TABLE messages")
  //   .catch((error) => console.error("drop table error =====>", error));
  client
    .query(
      "CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, sender INT REFERENCES users (id) ON DELETE CASCADE, receiver INT REFERENCES users (id) ON DELETE CASCADE, content TEXT, time BIGINT)"
    )
    .catch((error) =>
      console.error("create message table error =====>", error)
    );
  // client
  //   .query(
  //     ""
  //   )
  //   .catch((error) => console.error(error));
});
