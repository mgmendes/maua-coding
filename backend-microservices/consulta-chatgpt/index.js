const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/gerador-avaliacoes", (req, res) => {
  res.json({ message: "API Gerador de Avaliações funcionando..." });
});

app.post("/gerador-avaliacoes", (req, res) => {
  axios.post("http://localhost:3000/eventos", evento);

  app.get("/eventos", (req, res) => {
    res.send(eventos);
  });

  res.status(201).json({ msg: "POST ChatGPT - Adicionado" });
});

app.post("/eventos", (req, res) => {
  res.status(201).json({ msg: "Evento Recebido" });
});

app.listen(PORT, () => {
  console.log(
    colors.bgWhite.black(" MICROSERVIÇO CHATGPT  ") +
      colors.bgYellow(" iniciado na porta " + PORT + "  ")
  );
  console.log("");
});
