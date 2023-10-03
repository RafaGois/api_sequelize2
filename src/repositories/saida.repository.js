const { Saida, Item, Usuario } = require("../database/models/index");

const criar = async function (saida) {
  const saidaCriada = await Saida.create(saida);
  return saidaCriada;
};

const encontrarTodos = async function () {
  const saidas = await Saida.findAll({
    include: [
      {
        model: Item,
        as: "item",
      },
      {
        model: Usuario,
        as: "usuario",
      },
    ],
  });
  return saidas;
};

const encontrarPorId = async function (id) {
  const saida = await Saida.findByPk(id);
  return saida;
};

const encontrarPorWhere = async function (where) {
  const saida = await Saida.findOne({
    where: where,

    include: [
      {
        model: Item,
        as: "item",
      },
      {
        model: Usuario,
        as: "usuario",
      },
    ],
  });
  return saida;
};

module.exports = {
  criar,
  encontrarTodos,
  encontrarPorId,
  encontrarPorWhere,
};
