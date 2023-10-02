const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const usuaroValidator = require("../validator/usuario.validator");
const verifyJWT = require("../middlewares/authorizator");

router.post("/", usuaroValidator.criar(), usuarioController.create);
router.post("/login", usuaroValidator.login(), usuarioController.login);
router.get("/", verifyJWT, usuarioController.findAll);
router.get(
  "/:id",
  verifyJWT,
  usuaroValidator.encontrarPorId(),
  usuarioController.findByPk
);
router.put(
  "/:id",
  verifyJWT,
  usuaroValidator.atualizar(),
  usuarioController.atualizar
);
router.delete(
  "/:id",
  verifyJWT,
  usuaroValidator.deletar(),
  usuarioController.deletar
);

module.exports = router;
