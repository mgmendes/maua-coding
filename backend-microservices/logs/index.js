const express = require("express");
const cors = require("cors");
const colors = require("colors");
const axios = require("axios");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 4000;

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

const eventos = [];

app.post("/logs", (req, res) => {
  try {
    const { mensagem } = req.body;
    const sql = "INSERT INTO log (mensagem) VALUES (?)";

    pool.query(sql, [mensagem], (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.json({ message: "Gerador de Avaliações Endpoint", results });
      }
    });
  } catch (error) {
    console.error(error);
  }
});

app.get("/logs", (req, res) => {
  try {
    pool.query("SELECT * FROM log", (err, results, fields) => {
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

app.post("/eventos", (req, res) => {
  const evento = req.body;
  evento.push(evento);

  axios.post("http://localhost:10000/eventos", evento);

  app.get("/eventos", (req, res) => {
    res.send(eventos);
  });

  res.status(201).json({ msg: "Evento criado com sucesso" });
});

app.listen(PORT, () => {
  console.log(
    colors.bgWhite.black(" MICROSERVIÇO LOGS     ") +
      colors.bgYellow(" iniciado na porta " + PORT + "  ")
  );
  console.log("");
});
