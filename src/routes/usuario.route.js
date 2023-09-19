const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");

router.post("/", usuarioController.create);
router.get("/", usuarioController.findAll);
router.get("/:id", usuarioController.findByPk);

module.exports = router; 