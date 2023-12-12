const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
const router = express.Router();

/* GET users listing. */


router.get(
  // #swagger.tags = ["users"]
  "/profile/:username",
  usersCtrl.getUserName,
);

router.post(
   // #swagger.tags = ["users"]
  "/create",
  usersCtrl.postCreateUser,
)
router.get(
   // #swagger.tags = ["users"]
  "/",
  usersCtrl.getAllUsers,
)

module.exports = router;
