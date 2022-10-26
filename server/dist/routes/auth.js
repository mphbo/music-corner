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
const bcrypt_1 = __importDefault(require("bcrypt"));
const messages_1 = require("../constants/messages");
const router = express_1.default.Router();
const authRoutes = (db) => {
    router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, email, url, password } = req.body;
        const user = (yield db.query(`SELECT * FROM users WHERE username=$1 OR email=$2`, [
            username,
            email,
        ])).rows[0];
        if (user) {
            return user.email === email
                ? res.status(403).json({
                    result: null,
                    isSuccess: false,
                    message: messages_1.Messages.EMAIL_ALREADY_EXISTS,
                })
                : res.status(403).json({
                    result: null,
                    isSuccess: false,
                    message: messages_1.Messages.USERNAME_ALREADY_EXISTS,
                });
        }
        yield bcrypt_1.default.genSalt(10, (err, salt) => {
            bcrypt_1.default.hash(password, salt, (err, passwordhash) => {
                db.query("INSERT INTO users (username, email, url, passwordhash) VALUES($1, $2, $3, $4)", [username, email, url, passwordhash]);
                if (!err)
                    res
                        .status(200)
                        .json({ result: { username, email, url }, isSuccess: true });
                else {
                    res.status(500).json({
                        result: null,
                        isSuccess: false,
                        message: messages_1.Messages.ERROR_CREATING_ACCOUNT,
                    });
                }
            });
        });
    }));
    router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const users = (yield db.query(`SELECT * FROM users WHERE email=$1`, [email])).rows;
        if (users.length === 0) {
            res.status(403).json({
                result: null,
                isSuccess: false,
                message: messages_1.Messages.EMAIL_DOES_NOT_EXIST,
            });
            return;
        }
        const user = users[0];
        const { username, url } = user;
        yield bcrypt_1.default.compare(password, user.passwordhash, (err, result) => {
            err
                ? res.status(500).json({
                    result: null,
                    isSuccess: false,
                    message: messages_1.Messages.ERROR_DECRYPTING_PASSWORD,
                })
                : result === false
                    ? res.status(401).json({
                        result: null,
                        isSuccess: false,
                        message: messages_1.Messages.INCORRECT_EMAIL_PASSWORD_COMBINATION,
                    })
                    : res
                        .status(200)
                        .json({ result: { email, username, url }, isSuccess: true });
        });
    }));
    return router;
};
exports.default = authRoutes;
//# sourceMappingURL=auth.js.map