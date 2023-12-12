const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brandsCtrl');
const passport = require("passport")
// #swagger.tags = ["brands"]

router.get(
  // #swagger.tags = ["brands"]
  // #swagger.summary = 'Get all brands'
  // #swagger.description = 'Get all brands with name and logo'
  // #swagger.parameters['page'] = { description: 'Page number (default 0)', type: 'number' }
  // #swagger.parameters['limit'] = { description: 'Elements per page (default 2)', type: 'number'
  "/",
  brandsCtrl.getAllBrands
);

router.post(
  // #swagger.tags = ["brands"]
  "/",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.postCreateBrand,
)

router.delete(
  // #swagger.tags = ["brands"]
  "/:id",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.deleteBrand,
)

router.get(
  // #swagger.tags = ["brands"]
  "/:id",
  brandsCtrl.getOneBrand,
)

router.patch(
  // #swagger.tags = ["brands"]
  "/:id",
  passport.authenticate('jwt', { session: false }),
  brandsCtrl.patchUpdateBrand,
)


module.exports = router;
