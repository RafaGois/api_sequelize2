const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const usuaroValidator = require("../validator/usuario.validator");

router.post("/", usuaroValidator.criar(), usuarioController.create);
router.get("/", usuarioController.findAll);
router.get("/:id", usuaroValidator.encontrarPorId(), usuarioController.findByPk);

module.exports = router; 