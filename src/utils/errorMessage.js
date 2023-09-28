const validatorMessage = function(atributo) {
    return `A propriedade [${atributo}] é inválida.`;
}

const notExists = function(atributo) {
    return `[${atributo}] não existe.`
}

module.exports = {
    validatorMessage,
    notExists
}