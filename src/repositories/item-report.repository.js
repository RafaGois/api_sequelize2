const { sequelize } = require("../database/models/index");
const { QueryTypes } = require("sequelize");

const relatorio = async function (filtros) {
  const filtrosSql = filtrar(filtros);

  let consulta = `
  SELECT * FROM 
    (
      SELECT
        i.nome AS 'nome',
        s.quantidade AS 'quantidade',
        'Saída' AS 'tipo',
        0 AS 'preco',
        s.createdAt AS 'createdAt'
      FROM
      items AS i
      INNER JOIN saidas AS s on(i.id = s.item_id)
      WHERE
    i.deletedAt is null
    AND s.deletedAt is null
  UNION
  SELECT 
    i.nome AS 'nome',
    e.quantidade AS 'quantidade',
    'Entrada' AS 'tipo',
    e.preco AS 'preco',
    e.createdAt AS 'createdAt'
  FROM
    items AS i
    INNER JOIN entradas AS e ON(e.item_id = i.id)
  WHERE
    i.deletedAt IS null
    AND e.deletedAt is null
  ) as rl
    WHERE 1 ${filtrosSql}`;

  consulta += ` ORDER BY rl.createdAt DESC`;

  const dados = await sequelize.query(consulta, {
    raw: true,
    type: QueryTypes.SELECT,
  });
  return dados;
};

const filtrar = function (filtros) {
  let sqlFiltros = "";

  if (filtros.dataInicial && filtros.dataInicial.trim()) {
    sqlFiltros += `AND rl.createdAt >= '${filtros.dataInicial} 00:00:00'`;
  }

  if (filtros.dataFinal && filtros.dataFinal.trim()) {
    sqlFiltros += `AND rl.createdAt <= '${filtros.dataFinal} 23:59:59'`;
  }

  if (filtros.nome && filtros.nome.trim()) {
    sqlFiltros += `AND rl.nome LIKE '%${filtros.nome}%'`;
  }

  if (filtros.tipo && filtros.tipo.trim()) {
    sqlFiltros += `AND rl.tipo = '${filtros.tipo}'`;
  }

  if (filtros.quantidade && filtros.quantidade.trim()) {
    sqlFiltros += `AND rl.quantidade >= ${filtros.quantidade}`;
  }

  return sqlFiltros;
};

module.exports = {
  relatorio,
};
