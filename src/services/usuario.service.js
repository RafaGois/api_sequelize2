const usuarioRepository = require("../repositories/usuario.repository");
const createError = require("http-errors");
require("dotenv").config();
const bcrypy = require("bcrypt");
const { sign } = require("jsonwebtoken");

const create = async function (usuario) {
  const existeUsuario = await usuarioRepository.encontrarPorWhere({email: usuario.email});
  if(existeUsuario) {
    return createError(409, "Usuario já existe."); 
  }
  usuario.senha = await bcrypy.hash(usuario.senha, +process.env.SALT);
  const usuarioCriado = await usuarioRepository.create(usuario);
  return usuarioCriado;
};

const login = async function (usuario) {
  const usuarioLogin = await usuarioRepository.encontrarPorWhere({
    email: usuario.email
  });

  if(!usuarioLogin) {
    return createError(401, "Usuario inválido");
  }

  const comparacaoSenha = await bcrypy.compare(usuario.senha, usuarioLogin.senha);

  if (!comparacaoSenha) {
    return createError(401, "Senha inválida");
  }

  const token = sign({
    id: usuarioLogin.id,
  }, process.env.SECRET, {
    expiresIn: 90000,//!procurar esse tempo 
  })

  delete usuarioLogin.senha;

  return {
    auth: true,
    usuario: usuarioLogin,
    token: token,
  }
}

const atualizar = async function(usuario, id) {
  const existeUsuario = await usuarioRepository.findByPk(id);

  if(!existeUsuario) {
    return createError(404, "Usuário não existe.");
  }

  await usuarioRepository.atualizar(usuario,id);
  return await usuarioRepository.findByPk(id);
}

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

const deletar = async function (id) {
  const usuario = await usuarioRepository.findByPk(id);
  if(!usuario) {
    return createError(404,"Usuário não encontrado.")
  }
  await usuarioRepository.deletar(id);
  return usuario;
};

module.exports = {
  create,
  atualizar,
  findAll,
  findByPk,
  deletar,
};
