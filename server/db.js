const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1111",
  database: "cat_shelterdb",
  port: 5432,
});

module.exports = pool;
