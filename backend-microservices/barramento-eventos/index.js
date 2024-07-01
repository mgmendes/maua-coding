const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());

const eventos = [];

app.post("/eventos", (req, res) => {
  const evento = req.body;
  evento.push(evento);

  // Envio para o Microsserviço de Consulta ChatGPT
  axios.post("http://localhost:3000/eventos", evento);

  // Envio para o Microsserviço de Logs
  axios.post("http://localhost:4000/eventos", evento);

  app.get("/eventos", (req, res) => {
    res.send(eventos);
  });

  res.status(201).json({ msg: "Evento criado com sucesso" });
});

app.listen(PORT, () => {
  console.log(
    colors.bgWhite.black(" BARRAMENTO DE EVENTOS ") +
      colors.bgYellow(" iniciado na porta " + PORT + " ")
  );
  console.log("");
});
