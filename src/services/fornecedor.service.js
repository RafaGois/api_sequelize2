const createError = require("http-errors");
const fornecedorRepository = require("../repositories/fornecedor.repository");

const criar = async function (fornecedor) {
  const fornecedorCriado = await fornecedorRepository.criar(fornecedor);
  return fornecedorCriado;
};

const atualizar = async function (fornecedor, id) {
  const fornecedorExiste = await fornecedorRepository.encontrarPorId(id);

  if (!fornecedorExiste) {
    return createError(404, "Fornecedor informado não existe.");
  }

  await fornecedorRepository.atualizar(fornecedor, id);
  return await fornecedorRepository.encontrarPorId(id);
};

const encontrarTodos = async function () {
  const fornecedores = await fornecedorRepository.encontrarTodos();
  return fornecedores;
};

const encontrarPorId = async function (id) {
  const fornecedor = await fornecedorRepository.encontrarUmPorWhere(id);
  if (!fornecedor) {
    return createError(404, "Fornecedor não existe.");
  }
  return fornecedor;
};

const encontrarUmPorWhere = async function (where) {
  const fornecedor = await fornecedorRepository.encontrarUmPorWhere(where);
  if (!fornecedorExiste) {
    return createError(404, "Fornecedor não existe.");
  }
  return fornecedor;
};

const deletar = async function (id) {
  const fornecedor = await fornecedorRepository.encontrarPorId(id);
  if (!fornecedor) {
    return createError(404, "Fornecedor informado não existe.");
  }

  await fornecedorRepository.deletar(id);
  return fornecedor;
};

module.exports = {
  criar,
  atualizar,
  encontrarTodos,
  encontrarPorId,
  encontrarUmPorWhere,
  deletar,
};
