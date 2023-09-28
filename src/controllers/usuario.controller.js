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

module.exports = {
  create,
  findAll,
  findByPk,
};
