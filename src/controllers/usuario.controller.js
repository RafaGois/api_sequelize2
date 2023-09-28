const usuarioService = require("../services/usuario.service");

const create = async function (req, res, next) {
  try {
    const response = await usuarioService.create(req.body);
    if (response && response.message) {
      throw response; 
    }
    res.send(response);
  } catch (err) {
    next(err)  
  }
};

const findAll = async function (req, res, next) {
  try {
    const response = await usuarioService.findAll();
    if(response && response.message) {
      throw response;
    }
    res.send(response);
  } catch(err) {
    next(err);
  }
};

const findByPk = async function (req, res,next) {
  try {

    const response = await usuarioService.findByPk(req.params.id);
    if(response && response.message) {
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
