const express = require("express");
const cors = require("cors");
const colors = require("colors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const eventos = [];

app.post("/eventos", (req, res) => {
  const evento = req.body;
  evento.push(evento);

  axios.post("http://localhost:3000/eventos", evento);

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
