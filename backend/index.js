const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/consulta", (req, res) => {
  res.json({ message: "Consulta Endpoint" });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
