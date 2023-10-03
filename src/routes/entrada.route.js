const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/authorizator");

const entradaValidator = require("../validator/entrada.validator");
const entradaController = require("../controllers/entrada.controller");

router.post("/", verifyJWT, entradaValidator.criar(), entradaController.criar);
router.get("/", verifyJWT, entradaController.encontrarTodos);
router.get(
  "/:id",
  verifyJWT,
  entradaValidator.encontrarPorId(),
  entradaController.encontrarPorId
);

module.exports = router;
