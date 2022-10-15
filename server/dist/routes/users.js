"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formatResponse_1 = require("../helpers/formatResponse");
const router = express_1.default.Router();
const usersRoutes = (db) => {
    router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = (yield db.query("SELECT username, email, url FROM users"))
            .rows;
        res.json((0, formatResponse_1.formatResponse)(users, true));
    }));
    router.get("/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email } = req.params;
        const user = (yield db.query(`SELECT * FROM users WHERE email=$1`, [email]))
            .rows[0];
        res.json((0, formatResponse_1.formatResponse)(user));
    }));
    router.put("/:userEmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userEmail } = req.params;
        const { email, username, url } = req.body;
        const users = (yield db.query(`SELECT * FROM users WHERE email=$1 OR email=$2 OR username=$3`, [userEmail, email, username])).rows;
        // if (!!users.find((user) => user.email === userEmail)) {
        //   return res
        //     .status(403)
        //     .json(formatResponse("", false, "Email does not exist"));
        // }
        if (users.find((user) => user.username === username && user.email !== userEmail)) {
            return res
                .status(403)
                .json((0, formatResponse_1.formatResponse)("", false, "Username already taken"));
        }
        if (users.find((user) => user.email !== userEmail && user.email === email)) {
            return res
                .status(403)
                .json((0, formatResponse_1.formatResponse)("", false, "Email already taken"));
        }
        const updatedUser = (yield db.query(`UPDATE users SET email=$1, username=$2, url=$3 WHERE email=$4 RETURNING email, username, url;`, [email, username, url, userEmail])).rows[0];
        res.json((0, formatResponse_1.formatResponse)(updatedUser));
    }));
    router.delete("/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email } = req.params;
        // Delete user
        const response = (yield db.query(`DELETE FROM users WHERE email=$1;`, [email])).rows;
        res.json((0, formatResponse_1.formatResponse)(response));
    }));
    return router;
};
exports.default = usersRoutes;
//# sourceMappingURL=users.js.map