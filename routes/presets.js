const express = require('express');
const presetsCtrl = require('../controllers/presetsCtrl');
const router = express.Router();
const passport = require("passport")
presetsCtrl
router.get(
    "/",
    presetsCtrl.getAllPresets,
);

router.post(
    "/",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.postCreatePreset,
)

router.delete(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.deletePreset,
)

router.get(
    "/:id",
    presetsCtrl.getOnePreset,
)

router.patch(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.patchUpdatePreset,
)

module.exports = router;