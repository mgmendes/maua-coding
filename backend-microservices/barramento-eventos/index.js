const axios = require("axios");
const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());

app.post("/eventos", async (req, res) => {
  const { tipo, dados } = req.body;
  console.log("Tipo:", tipo);
  console.log("Dados: ", dados);

  if (tipo === "log") {
    console.log(colors.blue("Evento é um log"));

    // Envia para o microserviço de logs
    await axios.post(
      "http://localhost:4000/eventos",
      JSON.parse(JSON.stringify(dados))
    );

    // Envia dados para o microserviço de relatórios estatísticos
    await axios.post(
      "http://localhost:8000/eventos",
      JSON.parse(JSON.stringify(dados))
    );
  } else {
    res.status(500).json({ msg: "Evento não identificado" });
  }

  res.status(201).json({ msg: "Evento criado com sucesso", dados });
});

app.listen(PORT, () => {
  console.log(
    colors.bgCyan.black(" BARRAMENTO DE EVENTOS   ") +
      colors.bgYellow(" iniciado na porta " + PORT + " ")
  );
  console.log("");
});
