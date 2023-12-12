const express = require('express');
const router = express.Router();
const amplifiersCtrl = require('../controllers/amplifiersCtrl');
const passport = require("passport")
router.get(
    // #swagger.summary = 'Get all amplifierss'
    // #swagger.description = 'Get all amplifiers'
    // #swagger.parameters['page'] = { description: 'Page number (default 0)', type: 'number' }
    // #swagger.parameters['limit'] = { description: 'Elements per page (default 2)', type: 'number'
    // #swagger.parameters['brand'] = { description: 'brand id', type: 'string
    "/",
    amplifiersCtrl.getAllAmplifiers
);

router.post(
    "/",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.postCreateAmplifier,
)

router.delete(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.deleteAmplifier,
)

router.get(
    "/:id",
    amplifiersCtrl.getOneAmplifier,
)

router.patch(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    amplifiersCtrl.patchUpdateAmplifier,
)


module.exports = router;
