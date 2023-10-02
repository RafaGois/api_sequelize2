const { Item } = require("../database/models/index");

const criar = async function (item) {
  const itemCriado = await Item.create(item);
  return itemCriado;
};

const atualizar = async function (item, id) {
  await Item.update(item, {
    where: { id: id },
  });
};

const encontrarTodos = async function () {
  const itens = await Item.fontAll();
  return itens;
};

const encontrarPorId = async function (id) {
  const item = await Item.findByPk(id);
  return item;
};

const encontrarPorWhere = async function (where) {
  const item = await Itens.findOne({
    where: where,
  });
  return item;
};

const deletar = async function (id) {
  return await Item.destroy({
    where: { id: id },
  });
};

module.exports = {
  criar,
  atualizar,
  encontrarTodos,
  encontrarPorId,
  deletar,
};
