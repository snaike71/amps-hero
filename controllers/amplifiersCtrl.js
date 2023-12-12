const Amplifier = require("../models/Amplifier");
const Preset = require("../models/Preset");

module.exports = {
    getAllAmplifiers: async function (req, res, next) {
        try {
            let { page, limit, brand } = req.query;
            const total = await Amplifier.countDocuments()
            console.log(req.user)
            let filters = {};

            if(brand){
                filters.brand = brand
            }

            page = typeof page != "number" ? 1 : parseInt(page)
            limit = typeof limit != "number" ? 1 : parseInt(limit)


            const amplifiers = await Amplifier.find().populate("brand").where(filters).limit(limit).skip((page - 1) * limit)
            res.status(200).json({ page, total, amplifiers })
        } catch (error) {
            res.status(400).json(error)
        }

    },
    postCreateAmplifier: async function (req, res, next) {
        try {
            const Amplifiers = await Amplifier.create(req.body)
            res.status(201).json(Amplifiers)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    deleteAmplifier: async function (req, res, next) {
        try {
            const amplifierId = req.params.id
            await Amplifier.findByIdAndDelete(amplifierId)
            await Preset.deleteMany({amp: req.params.id})
            res.status(204).json({ message: 'Amplifier and Presets successfully deleted!' })
        } catch (error) {
            res.status(404).json({ 'error': 'Can\'t find brand' });
        }
    },
    patchUpdateAmplifier: async function (req, res, next) {
        try {
            let amplifier = await Amplifier.findById(req.params.id)
            Object.assign(amplifier, req.body)
            await amplifier.save();
            res.status(200).json(amplifier)
        } catch (error) {
            res.status(400).json(e)
        }
    },
    getOneAmplifier: async function (req, res, next) {
        try {
            const AmplifierId = req.params.id
            const amplifier = await Amplifier.findById(AmplifierId).populate(["brand","preset","preset.user"])
            res.status(200).json(amplifier)
        } catch (error) {
            res.status(400).json(e)
        }
    },
}