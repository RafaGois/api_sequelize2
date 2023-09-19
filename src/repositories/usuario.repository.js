const db = require("../database/models/index")
const { Usuario } = require("../database/models/index");

const create = async function(usuario) {
    return await Usuario.create(usuario);
}

const findAll = async function() {
    return await Usuario.findAll();
}

const findByPk = async function(id) {
    return await Usuario.findByPk(id);
}

module.exports = {
    create,
    findAll,
    findByPk,
}