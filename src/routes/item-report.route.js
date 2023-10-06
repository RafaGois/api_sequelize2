const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/authorizator");

const itemReportController = require("../controllers/item-report.controller");

router.get("/", verifyJWT, itemReportController.xlsx);

module.exports = router;
