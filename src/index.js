const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.get("/saludo", (req, res) => {
  res.send("Hola desde la ruta /saludo!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
