const Preset = require("../models/Preset")




module.exports = {
   
    getAllPresets: async function(req,res,next){
        try {
            let { page, limit, ampli, music } = req.query;
            const total = await Preset.countDocuments()
            
            let filters = {};

            if(ampli){
                filters.amp = ampli
            }
            if(musique){
                filters.musicTitle = music
            }

            page = typeof page != "number" ? 1 : parseInt(page)
            limit = typeof limit != "number" ? 1 : parseInt(limit)

            const presets = await Preset.find().populate("amp").where(filters).limit(limit).skip((page - 1) * limit)
            res.status(200).json({page, total, presets})
        } catch (error) {
            res.status(404).json(error)
        }
    },
    postCreatePreset: async function(req,res,next){
        try {
            const Presets = await Preset.create(req.body)
            res.status(201).json(Presets)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    deletePreset: async function(req,res,next){
        try {
            await Preset.deleteOne({_id: req.params.id})
            res.status(204).json({ message: 'Preset successfully deleted!' })
        } catch (error) {
            res.status(404).json({ 'error': 'Can\'t find brand' });
        }
    },
    patchUpdatePreset: async function(req,res,next){
        try {
            let preset = await Preset.findById(req.params.id)
            Object.assign(preset,req.body)
            await preset.save();
            res.status(200).json(preset) 
        } catch (error) {
            res.status(404).json(error)
        }
    },
    
    getOnePreset: async function(req,res,next){
        try {
            const PresetId = req.params.id
            await Preset.findById(PresetId)
        } catch (error) {
            res.status(404).json(error)
        }
    },
}