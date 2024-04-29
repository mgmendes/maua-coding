const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

app.get("/consulta", (req, res) => {
  res.json({ message: "Consulta Endpoint" });
});

app.post("/logs", async (req, res) => {
  res.json({ message: "Gerador de Avaliações Endpoint" });
});

app.post("/gerador-avaliacoes", async (req, res) => {
  console.log("Rota Gerador Avaliações Atingida");

  const {
    tema,
    disciplina,
    escolaridade,
    dificuldade,
    exemplo,
    numeroQuestoesAlternativas,
    numeroQuestoesDissertativas,
  } = req.body;

  console.log(
    "Dados: ",
    tema,
    disciplina,
    escolaridade,
    dificuldade,
    exemplo,
    numeroQuestoesAlternativas,
    numeroQuestoesDissertativas
  );

  if (
    !tema ||
    !disciplina ||
    !escolaridade ||
    !dificuldade ||
    !numeroQuestoesAlternativas ||
    !numeroQuestoesDissertativas
  ) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  const data = {
    tema,
    disciplina,
    escolaridade,
    dificuldade,
    exemplo,
    numeroQuestoesAlternativas,
    numeroQuestoesDissertativas,
    numeroQuestoes:
      Number(numeroQuestoesAlternativas) + Number(numeroQuestoesDissertativas),
  };

  console.log(data);

  res.status(201).json({ message: "Questionario Salvo", data });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
