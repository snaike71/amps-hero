const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brandsCtrl');

router.get(
  brandsCtrl.getAllBrandsPath,
  brandsCtrl.getAllBrands
);

router.post(
  brandsCtrl.postCreateBrandPath,
  brandsCtrl.postCreateBrand,
)

router.delete(
  brandsCtrl.deleteBrandPath,
  brandsCtrl.deleteBrand,
)

router.get(
  brandsCtrl.getOneBrandPath,
  brandsCtrl.getOneBrand,
)

router.patch(
  brandsCtrl.patchUpdateBrandPath,
  brandsCtrl.patchUpdateBrand,
)

module.exports = router;
