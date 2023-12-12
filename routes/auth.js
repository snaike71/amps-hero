const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');


router.post(
    // #swagger.tags = ["auth"]
    "/register",
    authCtrl.postRegister
);
router.post(
    // #swagger.tags = ["auth"]
    "/login",
    authCtrl.postLogin
);



module.exports = router;
