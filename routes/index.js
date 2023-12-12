const express = require('express');
const indexCtrl = require('../controllers/indexCtrl');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
/* GET home page. */
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.get(
    // #swagger.tags = ["index"]
    "/",
    indexCtrl.index);

module.exports = router;
