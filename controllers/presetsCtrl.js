const Preset = require("../models/Preset")


const getAllPresetsPath = "/";
const postCreatePresetPath = "/";
const deletePresetPath = "/:id";
const patchUpdatePresetPath = "/:id";
const getOnePresetPath = "/:id";

module.exports = {
    getAllPresetsPath: getAllPresetsPath,
    postCreatePresetPath: postCreatePresetPath,
    deletePresetPath: deletePresetPath,
    getOnePresetPath: getOnePresetPath,
    patchUpdatePresetPath:patchUpdatePresetPath,
    getAllPresets: async function(req,res,next){
        try {
            const Presets = await Preset.find()
            res.status(200).json(Presets)
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
            const PresetId = req.params.id
            await Preset.deleteOne({_id: PresetId})
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