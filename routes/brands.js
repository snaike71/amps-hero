const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brandsCtrl');
const passport = require("passport")
// #swagger.tags = ["brands"]

router.get(
  // #swagger.summary = 'Get all brands'
  // #swagger.description = 'Get all brands with name and logo'
  // #swagger.parameters['page'] = { description: 'Page number (default 0)', type: 'number' }
  // #swagger.parameters['limit'] = { description: 'Elements per page (default 2)', type: 'number'
  "/",
  brandsCtrl.getAllBrands
);

router.post(
  "/",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.postCreateBrand,
)

router.delete(
  "/:id",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.deleteBrand,
)

router.get(
  "/:id",
  brandsCtrl.getOneBrand,
)

router.patch(
  "/:id",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.patchUpdateBrand,
)


module.exports = router;
