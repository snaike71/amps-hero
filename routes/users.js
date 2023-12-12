const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');
const router = express.Router();

/* GET users listing. */


router.get(
  "/profile/:id",
  usersCtrl.getUser,
);

router.delete(
  "/:id",
  usersCtrl.deleteUser,
)
router.patch(
  "/:id",
  usersCtrl.patchUpdateUser,
)
router.get(
  "/",
  usersCtrl.getAllUsers,
)

module.exports = router;
