import pgPromise from "pg-promise";
import { knex } from "knex";

const pgp = pgPromise({});

const postgersDB = pgp({
  user: "postgres",
  password: "teste",
  host: "localhost",
  port: 5432,
  database: "app",
  idleTimeoutMillis: 100,
});

const mysqlDB = knex({
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

export { postgersDB, mysqlDB };
