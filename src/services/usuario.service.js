const usuarioRepository = require("../repositories/usuario.repository");
const createError = require("http-errors");
require("dotenv").config();
const bcrypy = require("bcrypt");

const create = async function (usuario) {
  const existeUsuario = await usuarioRepository.encontrarPorWhere({email: usuario.email});
  if(existeUsuario) {
    return createError(409, "Usuario já existe."); 
  }
  usuario.senha = await bcrypy.hash(usuario.senha, +process.env.SALT);
  const usuarioCriado = await usuarioRepository.create(usuario);
  return usuarioCriado;
};

const findAll = async function () {
  const usuarios = await usuarioRepository.findAll();
  return usuarios;
};

const findByPk = async function (id) {
  const usuario = await usuarioRepository.findByPk(id);
  if(!usuario) {
    return createError(404,"Usuário não encontrado.")
  }
  return usuario;
};

module.exports = {
  create,
  findAll,
  findByPk,
};
