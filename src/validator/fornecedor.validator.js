const { body, param } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

function criar() {
  return [
    body("nome", validatorMessage("Nome")).exists().bail().isString(),
    body("email", validatorMessage("Email")).exists().bail().isString(),
    body("telefone", validatorMessage("Telefone")).exists().bail().isString(),
  ];
}

function atualizar() {
  return [
    body("nome", validatorMessage("Nome")).exists().bail().isString(),
    body("email", validatorMessage("Email")).exists().bail().isString(),
    body("telefone", validatorMessage("Telefone")).exists().bail().isString(),
    param("id", validatorMessage("ID")).exists().bail().isString(),
  ];
}

function encontrarPorId () {
    return [
        param("id", validatorMessage("ID")).exists().bail().isString(),
    ]
}

function deletar () {
    return [
        param("id", validatorMessage("ID")).exists().bail().isString(),
    ]
}

module.exports = {
  criar,
  atualizar,
  encontrarPorId,
  deletar,
};
