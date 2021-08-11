"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlDB = exports.postgersDB = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const knex_1 = require("knex");
const pgp = pg_promise_1.default({});
const postgersDB = pgp({
    user: "postgres",
    password: "teste",
    host: "localhost",
    port: 5432,
    database: "app",
    idleTimeoutMillis: 100,
});
exports.postgersDB = postgersDB;
const mysqlDB = knex_1.knex({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        database: "ca",
        user: "root",
        password: "",
        charset: "latin1",
    },
    pool: {
        min: 0,
        max: 1,
    },
});
exports.mysqlDB = mysqlDB;
