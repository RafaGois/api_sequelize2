const { Entrada } = require("../database/models/index");

const criar = async function (item) {
  const itemCriado = await Entrada.create(item);
  return itemCriado;
};

const encontrarTodos = async function () {
  const entradas = await Entrada.findAll();
  return entradas;
};

const encontrarPorId = async function (id) {
  const entrada = await Entrada.findByPk(id);
  return entrada;
};

const encontrarPorWhere = async function (where) {
  const entrada = await Entrada.findOne({
    where: where,
  });
  return entrada;
};


module.exports = {
  criar,
  encontrarTodos,
  encontrarPorId,
  encontrarPorWhere,
};
