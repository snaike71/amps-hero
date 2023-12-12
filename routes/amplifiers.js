const express = require('express');
const router = express.Router();
const amplifiersCtrl = require('../controllers/amplifiersCtrl');

router.get(
    // #swagger.tags = ["amplifier"]
    "/",
    amplifiersCtrl.getAllAmplifiers
);

router.post(
    // #swagger.tags = ["amplifier"]
    "/",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.postCreateAmplifier,
)

router.delete(
    // #swagger.tags = ["amplifier"]
    "/:id",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.deleteAmplifier,
)

router.get(
    // #swagger.tags = ["amplifier"]
    "/:id",
    amplifiersCtrl.getOneAmplifier,
)

router.patch(
    // #swagger.tags = ["amplifier"]
    "/:id",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.patchUpdateAmplifier,
)


module.exports = router;
