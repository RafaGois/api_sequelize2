const usuarioService = require("../services/usuario.service");

const create = async function (req, res, next) {
  try {
    const response = await usuarioService.create(req.body);
    if (response && response.message) {
      res.send(usuario);
    }
  } catch (err) {
    return next(err)
  }
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
