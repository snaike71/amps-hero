const express = require('express');
const presetsCtrl = require('../controllers/presetsCtrl');
const router = express.Router();

presetsCtrl
router.get(
    // #swagger.tags = ["presets"]
    "/",
    presetsCtrl.getAllPresets,
);

router.post(
    // #swagger.tags = ["presets"]
    "/",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.postCreatePreset,
)

router.delete(
    // #swagger.tags = ["presets"]
    "/:id",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.deletePreset,
)

router.get(
    // #swagger.tags = ["presets"]
    "/:id",
    presetsCtrl.getOnePreset,
)

router.patch(
    // #swagger.tags = ["presets"]
    "/:id",
    passport.authenticate('jwt', { session: false }),
    presetsCtrl.patchUpdatePreset,
)

module.exports = router;