const { verify } = require("jsonwebtoken");
const dotenv = require("dotenv");

const verifyJWT = function (req, res, next) {
  const token = req.headers["token"];

  if (!token) return res.status(401).send(["Token inválido."]);

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res;

    req.usuario_id = decoded.id;
    next();
  });
};

module.exports = verifyJWT;
