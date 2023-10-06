const itemReportSerice = require("../services/item-report.service");

const xlsx = async function (req, res, next) {
  try {
    let itens = await itemReportSerice.criarXlsx(req.query);
    res.send(itens);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    xlsx
}