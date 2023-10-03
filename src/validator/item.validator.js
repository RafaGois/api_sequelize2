const { body, param } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const criar = function () {
  return [
    body("nome", validatorMessage("Nome")).exists().bail().isString(),
  ];
};

const atualizar = function () {
  return [
    body("nome", validatorMessage("Nome")).exists().bail().isString(),
    param("id", validatorMessage("id")).exists().bail().isInt() 
  ];
};

const encontrarPorId = function() {
  return [
    param("id", validatorMessage("id")).exists().bail().isInt(),
  ]
};

const deletar = function() {
  return [
    param("id", validatorMessage("id")).exists().bail().isInt(),
  ]
};

module.exports = {
    criar,
    atualizar,
    encontrarPorId,
    deletar,
  }
