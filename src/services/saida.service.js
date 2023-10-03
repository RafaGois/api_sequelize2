const saidaRepository = require("../repositories/saida.repository");
const itemRepository = require("../repositories/item.repository");
const createError = require("http-errors");

const criar = async function (saida) {
  const item = await itemRepository.encontrarPorId(saida.item_id);
  if (!item) {
    return createError(404, "Item não existe, saida inválida.");
  }

  const quantidade = item.quantidade - saida.quantidade;

  if (quantidade < 0) {
    return createError(
      400,
      "Valor informado é maior do que a quantidade atual."
    );
  }

  const saidaCriada = await saidaRepository.criar(saida);

  await itemRepository.atualizar({ quantidade }, item.id);

  return saidaCriada;
};

const encontrarTodos = async function () {
  const saidas = await saidaRepository.encontrarTodos();
  return saidas;
};

const encontrarPorId = async function (id) {
  const saida = await saidaRepository.encontrarPorId(id);
  if (!saida) {
    return createError(404, "Item não encontrado.");
  }
  return saida;
};

module.exports = {
  criar,
  encontrarTodos,
  encontrarPorId,
};
