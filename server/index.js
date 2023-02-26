const express = require("express");
const pg = require("pg");
const pool = require("./db");
const cors = require("cors");
const port = 4000;
const app = express();
app.use(cors());
app.use(express.json());

//CATS
app.post("/add-cats", (req, res) => {
  const { id, name, img, info, gender, year, month } = req.body;
  pool.query(
    `INSERT INTO "all_cats" ("id", "name", "img", "info", "gender", "year", "month") VALUES($1, $2, $3, $4, $5, $6, $7)`,
    [id, name, img, info, gender, year, month],
    (error) => {
      if (error) throw error;
      res.status(201).json("");
    }
  );
});

app.get("/cats", (req, res) => {
  pool.query(`SELECT * FROM "all_cats"`, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

app.delete("/cats/:id", (req, res) => {
  const { id } = req.params;
  pool.query(`DELETE FROM "all_cats" WHERE "id"=$1`, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json("cat deleted!");
  });
});

app.put("/cats/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  pool.query(
    `UPDATE "all_cats" SET (name, img, gender, info, year, month) = ($2, $3, $4, $5, $6, $7) WHERE "id"=$1`,
    [id, update.name, update.img, update.gender, update.info, update.year, update.month],
    (error) => {
      if (error) throw error;
      res.status(200).json("cat update!");
    }
  );
});

//Admin
app.get("/admin_auth", (req, res) => {
  pool.query(`SELECT * FROM "administrator"`, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
});

//Registrations For Interview
app.post("/registrations_for_interview", (req, res) => {
  const { id, name, phone, date, time, cat_name } = req.body;
  console.log(req.body);
  pool.query(
    `INSERT INTO "registrations_for_interview" ("id", "name", "phone", "date", "time", "cat_name") VALUES($1, $2, $3, $4, $5, $6)`,
    [id, name, phone, date, time, cat_name],
    (error) => {
      if (error) throw error;
      res.status(201).json("");
    }
  );
});

app.get("/registrations_for_interview", (req, res) => {
  pool.query(
    `SELECT * FROM "registrations_for_interview"`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
});

app.delete("/registrations_for_interview/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  pool.query(`DELETE FROM "registrations_for_interview" WHERE "id"=$1`, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json("cat deleted!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
