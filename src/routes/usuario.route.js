const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const usuaroValidator = require("../validator/usuario.validator");

router.post("/", usuaroValidator.criar(), usuarioController.create);
router.get("/", usuarioController.findAll);
router.get("/:id", usuaroValidator.encontrarPorId(), usuarioController.findByPk);
router.put("/:id",usuaroValidator.atualizar(), usuarioController.atualizar );
router.delete("/:id", usuaroValidator.deletar(), usuarioController.deletar);

module.exports = router; 