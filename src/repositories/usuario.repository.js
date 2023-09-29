const db = require("../database/models/index");
const { Usuario } = require("../database/models/index");

const create = async function (usuario) {
  return await Usuario.create(usuario);
};

const atualizar = async function(usuario, id) {
  await Usuario.update(usuario, {
    where: {id:id}
  })
}

const findAll = async function () {
  return await Usuario.findAll();
};

const findByPk = async function (id) {
  return await Usuario.findByPk(id);
};

const encontrarPorWhere = async function (where) {
  const usuario = await Usuario.findOne({
    where: where,
  });
  return usuario;
};

const deletar = async function (id) {
  return await Usuario.destroy({where: {
    id: id
  }})
}

module.exports = {
  create,
  atualizar,
  findAll,
  findByPk,
  encontrarPorWhere,
  deletar,
};
