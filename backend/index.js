const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mysql = require("mysql2");

const { OpenAI } = require("openai");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

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

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Gerador de Avaliações funcionando..." });
});

app.get("/questionarios", (req, res) => {
  res.json({ message: "Consulta Endpoint", prompt });
});

app.post("/logs", async (req, res) => {
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

app.get("/logs", async (req, res) => {
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

app.post("/gerador-avaliacoes", async (req, res) => {
  console.log("");
  console.log(colors.bgWhite(" Rota Gerador Avaliações Atingida "));

  console.log(req.body);

  const { tema, disciplina, escolaridade, dificuldade, exemplo } = req.body;

  console.log(
    "Dados recebidos: ",
    tema,
    disciplina,
    escolaridade,
    dificuldade,
    exemplo
  );

  // Verifica se os dados foram preenchidos
  if (!tema || !disciplina || !escolaridade || !dificuldade) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  const pergunta = `Atue como um professor. Elabore uma prova para uma turma do ${escolaridade}, da matéria de ${disciplina}, sobre o tema de ${tema}, contendo 3 questões dissertativas de nível ${dificuldade}. Envie como retorno um arquivo JSON, contendo as questões em objetos dentro deste array, sem quebra de parágrafo, seguindo a seguinte estrutura: [{ enunciado: enunciado da questão, resposta: resposta da questão }].`;

  console.log(pergunta);

  const model = "gpt-3.5-turbo";
  const role = "user";
  const max_tokens = 500;

  const completion = await openai.chat.completions.create({
    messages: [{ role: role, content: pergunta }],
    model: model,
    max_tokens: max_tokens,
  });

  const response = completion.choices[0].message.content;

  console.log(completion.choices[0].message);

  res.json({ message: "Consulta Endpoint", completion, response });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
