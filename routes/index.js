var express = require('express');
const indexCtrl = require('../controllers/indexCtrl');
var router = express.Router();

/* GET home page. */
router.get("/", indexCtrl.index);

module.exports = router;
