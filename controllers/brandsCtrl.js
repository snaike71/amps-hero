const Brand = require("../models/Brand")

const TAG_NAME = "brands";
const TAGS = [TAG_NAME];

const getAllBrandsPath = "/";
const postCreateBrandPath = "/";
const deleteBrandPath = "/:id";
const patchUpdateBrandPath = "/:id";
const getOneBrandPath = "/:id";


const responseGetAllBrandsSchema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "fender",
      },
      logo: {
        type: "string",
      },
    },
  };
  
  

module.exports = {
    getAllBrandsPath: getAllBrandsPath,
    postCreateBrandPath: postCreateBrandPath,
    deleteBrandPath: deleteBrandPath,
    getOneBrandPath: getOneBrandPath,
    patchUpdateBrandPath: patchUpdateBrandPath,
    getAllBrands: async function(req,res,next){
        try {
            let { page, limit } = req.query;
            const total = await Brand.countDocuments()
            page = typeof page !="number" ? 1 : parseInt(page)
            limit = typeof limit !="number" ? 1 : parseInt(limit)
            const brands = await Brand.find().limit(limit).skip((page-1)*limit)
            res.status(200).json({page,total,brands})
        } catch (error) {
            res.status(400).json(error)
        }
    },
    postCreateBrand: async function(req,res,next){
        if (req.user.role !== 'admin') {
            return res.status(402).json({ error: 'Unauthorized' });
          }
        try {
            const brands = await Brand.create(req.body)
            console.log(brands)
            res.status(201).json(brands)
        } catch (error) {
            res.status(400).json(e);
        }
    },
    deleteBrand: async function(req,res,next){
        try {
            const brandId = req.params.id
            await Brand.deleteOne({_id: brandId})
            res.status(204).json({ message: 'Brand successfully deleted!' })
        } catch (error) {
            res.status(400).json(error)
        }
    },
  
    patchUpdateBrand: async function(req,res,next){
        try {
            let brand = await Brand.findById(req.params.id)
            Object.assign(brand,req.body)
            await brand.save();
            res.status(200).json(brand) 
        } catch (error) {
            res.status(400).json(e)
        }
    },
    getOneBrand: async function(req,res,next){
        try {
            const brandId = req.params.id
            const brand = await Brand.findById(brandId)
            res.status(200).json(brand)
        } catch (error) {
            res.status(404).json(error)
        }
    },
}