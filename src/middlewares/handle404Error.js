const handle404Error = function(req,res) {
    res.status(404);
    res.send(["Rota não encontrada."]);
}

module.exports = handle404Error;