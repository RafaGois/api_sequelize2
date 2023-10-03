const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/authorizator");

const saidaValidator = require("../validator/saida.validator");
const saidaController = require("../controllers/saida.controller");

router.post("/", verifyJWT, saidaValidator.criar(), saidaController.criar);
router.get("/", verifyJWT, saidaController.encontrarTodos);
router.get(
  "/:id",
  verifyJWT,
  saidaValidator.encontrarPorId(),
  saidaController.encontrarPorId
);

module.exports = router;
