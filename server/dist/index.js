"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
// Express App Setup
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Postgres Client Setup
const pg_1 = require("pg");
const pgClient = new pg_1.Pool({
    user: keys_1.default.pgUser,
    host: keys_1.default.pgHost,
    database: keys_1.default.pgDatabase,
    password: keys_1.default.pgPassword,
    port: keys_1.default.pgPort,
});
pgClient.on("connect", (client) => {
    client
        .query("CREATE TABLE IF NOT EXISTS users (username varchar(255), email varchar(255), url varchar(255), passwordhash varchar(255))")
        .catch((err) => console.error(err));
});
// Express route handlers
app.get("/", (req, res) => {
    res.send("Hi");
});
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
app.use("/users", (0, users_1.default)(pgClient));
app.use("/auth", (0, auth_1.default)(pgClient));
app.listen(5000, () => {
    console.log("Listening on port 5000");
});
//# sourceMappingURL=index.js.map