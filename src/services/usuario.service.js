const usuarioRepository = require("../repositories/usuario.repository");
require("dotenv").config();
const bcrypy = require("bcrypt");

const create = async function (usuario) {
    usuario.senha = await bcrypy.hash(usuario.senha, +process.env.SALT)
  const usuarioCriado = await usuarioRepository.create(usuario);
  return usuarioCriado;
};

const findAll = async function () {
  const usuarios = await usuarioRepository.findAll();
  return usuarios;
};

const findByPk = async function(id) {
    const usuario = await usuarioRepository.findByPk(id);
    return usuario;
}

module.exports = {
  create,
  findAll,
  findByPk,
};
