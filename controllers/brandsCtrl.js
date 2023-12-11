const Brand = require("../models/Brand")


const getAllBrandsPath = "/";
const postCreateBrandPath = "/";
const deleteBrandPath = "/:id";
const patchUpdateBrandPath = "/:id";
const getOneBrandPath = "/:id";

module.exports = {
    getAllBrandsPath: getAllBrandsPath,
    postCreateBrandPath: postCreateBrandPath,
    deleteBrandPath: deleteBrandPath,
    patchUpdateBrandPath: patchUpdateBrandPath,
    getOneBrandPath: getOneBrandPath,
    getAllBrands: async function(req,res,next){
        try {
            const brands = await Brand.find()
            res.statut(200).json(brands)
        } catch (error) {
            return next(error);
        }
    },
    postCreateBrand: async function(req,res,next){
        try {
            const brands = await Brand.create(req.body)
            res.statut(200).json(brands)
        } catch (error) {
            return next(error);
        }
    },
    deleteBrand: async function(req,res,next){
        try {
            const brandName = req.params.id
            await Brand.deleteOne({name: brandName})
        } catch (error) {
            return next(error);
        }
    },
    patchUpdateBrand: async function(req,res,next){
        try {
            
        } catch (error) {
            
        }
    },
    getOneBrand: async function(req,res,next){
        try {
            const brandId = req.params.id
            await Brand.findById({name: brandId})
        } catch (error) {
            
        }
    },
}