const { body, param } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const criar = function () {
  return [
    body("item_id", validatorMessage("Item")).exists().bail().isInt(),
    body("quantidade", validatorMessage("Quantidade")).exists().bail().isInt(),
    body("preco", validatorMessage("Preço")).exists().bail().isFloat(),
  ];
};

const encontrarPorId = function() {
  return [
    param("id", validatorMessage("id")).exists().bail().isInt(),
  ]
}; 

module.exports = {
    criar,
    encontrarPorId,
  }
