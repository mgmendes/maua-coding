const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 8000;

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
  console.log("POST Eventos em Relatório Estatístico Microservice");
  console.log("");

  try {
    const dados = req.body;

    const log = JSON.parse(JSON.stringify(dados));

    const sql =
      "INSERT INTO relatorio_estatistico (prompt_tokens, completion_tokens, total_tokens) VALUES (?, ?, ?)";

    pool.query(
      sql,
      [log.prompt_tokens, log.completion_tokens, log.total_tokens],
      (err, results, fields) => {
        if (err) {
          console.error(err);
        } else {
          res.json({ message: "Relatório Estatístico Endpoint", results });
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

app.get("/relatorios-estatisticos", (req, res) => {
  console.log("GET All Registros Estatísticos");
  console.log("");

  try {
    pool.query(
      "SELECT * FROM relatorio_estatistico",
      (err, results, fields) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(
    colors.bgWhite.black(" MICROSERVIÇO RELATÓRIOS ") +
      colors.bgYellow(" iniciado na porta " + PORT + "  ")
  );
  console.log("");
});
