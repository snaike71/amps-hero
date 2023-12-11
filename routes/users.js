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
);

router.get(
  usersCtrl.getCreateUserPath,
  usersCtrl.getCreateUser,
);


router.post(
  usersCtrl.postCreateUserPath,
  usersCtrl.postCreateUser,
)
router.get(
  usersCtrl.getAllUsersPath,
  usersCtrl.getAllUsers,
)

module.exports = router;
