const Amplifier = require("../models/Amplifier")


const getAllAmplifiersPath = "/";
const postCreateAmplifierPath = "/";
const deleteAmplifierPath = "/:id";
const patchUpdateAmplifierPath = "/:id";
const getOneAmplifierPath = "/:id";

module.exports = {
    getAllAmplifiersPath: getAllAmplifiersPath,
    postCreateAmplifierPath: postCreateAmplifierPath,
    deleteAmplifierPath: deleteAmplifierPath,
    getOneAmplifierPath: getOneAmplifierPath,
    patchUpdateAmplifierPath: patchUpdateAmplifierPath,
    getAllAmplifiers: async function(req,res,next){
        try {
            const Amplifiers = await Amplifier.find()
            res.status(200).json(Amplifiers)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    postCreateAmplifier: async function(req,res,next){
        try {
            const Amplifiers = await Amplifier.create(req.body)
            res.status(201).json(Amplifiers)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    deleteAmplifier: async function(req,res,next){
        try {
            const AmplifierId = req.params.id
            await Amplifier.deleteOne({_id: AmplifierId})
        } catch (error) {
            res.status(404).json({ 'error': 'Can\'t find brand' });
        }
    },
    patchUpdateAmplifier: async function(req,res,next){
        try {
            let amplifier = await Amplifier.findById(req.params.id)
            Object.assign(amplifier,req.body)
            await amplifier.save();
            res.status(200).json(amplifier) 
        } catch (error) {
            res.status(400).json(e)
        }
    },
    getOneAmplifier: async function(req,res,next){
        try {
            const AmplifierId = req.params.id
            await Amplifier.findById(AmplifierId)
        } catch (error) {
            res.status(400).json(e)
        }
    },
}