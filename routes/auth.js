const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');
const passport = require("passport")

router.post(
    "/register",
    authCtrl.postRegister
);
router.post(
    "/login",
    authCtrl.postLogin
);



module.exports = router;
