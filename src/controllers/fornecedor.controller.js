const { validationResult } = require("express-validator");
const fornecedorService = require("../services/fornecedor.service");

const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await fornecedorService.criar({
        nome: req.body.nome,
        email: req.email,
        telefone: req.telefone,
    });
    
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const atualizar = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await fornecedorService.atualizar({
        nome: req.body.nome,
        email: req.email,
        telefone: req.telefone,
    }, req.params.id);

    if(response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (error) {
    next(error)
  }
};

const encontrarTodos = async function (req, res, next) {
  try {
    const response = await fornecedorService.encontrarTodos();
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const encontrarPorId = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await fornecedorService.encontrarPorId(req.params.id);
    if (response && response.message) {
      throw response;
    }
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const deletar = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await fornecedorService.deletar(req.params.id);
    if (response && response.message) {
      throw response;
    }
    res.send(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  encontrarTodos,
  encontrarPorId,
  atualizar,
  deletar,
};
