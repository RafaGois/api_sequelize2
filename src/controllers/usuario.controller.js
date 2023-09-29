const { validationResult } = require("express-validator");
const usuarioService = require("../services/usuario.service");

const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await usuarioService.create(req.body);
    if (response && response.message) {
      throw response;
    }
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

    const response = await usuarioService.atualizar({
      nome: req.body.nome
    }, req.params.id);

    if(response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (error) {
    next(error)
  }
};

const findAll = async function (req, res, next) {
  try {
    const response = await usuarioService.findAll();
    if (response && response.message) {
      throw response;
    }
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const findByPk = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await usuarioService.findByPk(req.params.id);
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

    const response = await usuarioService.deletar(req.params.id);
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
  findAll,
  findByPk,
  atualizar,
  deletar,
};
