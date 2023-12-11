var express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
var router = express.Router();

/* GET users listing. */
router.get(
  usersCtrl.getUsersPath,
  usersCtrl.getUsers,
);

router.get(
  usersCtrl.getUserNamePath,
  usersCtrl.getUserName,
)

module.exports = router;
