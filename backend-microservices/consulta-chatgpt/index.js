const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

const PORT = process.env.PORT || 3000;

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
  console.log("");
  console.log(
    colors.bgWhite.black(" CONSULTA CHATGPT SERVICE ") +
      colors.bgYellow(" iniciado na porta " + PORT + " ")
  );
  console.log("");
});
