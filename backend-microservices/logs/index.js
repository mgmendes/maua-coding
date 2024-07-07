const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 4000;

require("dotenv").config();

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post("/eventos", (req, res) => {
  console.log("POST Eventos em Log Microservice");
  console.log("");

  try {
    const dados = req.body;

    const log = JSON.parse(JSON.stringify(dados));

    const sql =
      "INSERT INTO registro (prompt_tokens, completion_tokens, total_tokens) VALUES (?, ?, ?)";

    pool.query(
      sql,
      [log.prompt_tokens, log.completion_tokens, log.total_tokens],
      (err, results, fields) => {
        if (err) {
          console.error(err);
        } else {
          res.json({ message: "Logs Endpoint", results });
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

app.get("/logs", (req, res) => {
  console.log("GET All Logs");
  console.log("");

  try {
    pool.query("SELECT * FROM registro", (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(fields);
        res.json(results);
      }
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(
    colors.bgWhite.black(" MICROSERVIÇO LOGS     ") +
      colors.bgYellow(" iniciado na porta " + PORT + "  ")
  );
  console.log("");
});
