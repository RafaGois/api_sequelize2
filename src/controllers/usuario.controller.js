const usuarioService = require("../services/usuario.service");

const create = async function (req, res) {
  const usuario = await usuarioService.create(req.body);
  res.send(usuario);
};

const findAll = async function (req, res) {
  const usuarios = await usuarioService.findAll();
  res.send(usuarios);
};

const findByPk = async function (req, res) {
  const usuario = await usuarioService.findByPk(req.params.id);
  res.send(usuario);
};

module.exports = {
  create,
  findAll,
  findByPk,
};
