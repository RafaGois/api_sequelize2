const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const itemRoute = require("./src/routes/item.route");
const usuarioRoute = require("./src/routes/usuario.route");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/itens/", itemRoute);
app.use("/api/usuarios/", usuarioRoute);

app.listen(process.env.PORT, () => {
  console.log("rodando...");
});
