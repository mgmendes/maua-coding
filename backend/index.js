const express = require("express");
const cors = require("cors");
const colors = require("colors");

const { OpenAI } = require("openai");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Gerador de Avaliações funcionando..." });
});

app.get("/consulta", (req, res) => {
  res.json({ message: "Consulta Endpoint", prompt });
});

app.post("/logs", async (req, res) => {
  res.json({ message: "Gerador de Avaliações Endpoint" });
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
