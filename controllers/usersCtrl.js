const User = require("../models/User");

module.exports = {
    getUser: async function (req, res, next) {
        try {
            const user = await User.findById(req.params.id).populate("presets")
            res.status(200).json(user)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    getAllUsers: async function (req, res, next) {
        try {
            let { page, limit } = req.query;
            const total = await User.countDocuments()
            
            page = typeof page != "number" ? 1 : parseInt(page)
            limit = typeof limit != "number" ? 1 : parseInt(limit)
            const user = await User.find()
            res.statut(200).json({page,total,user})
        } catch (error) {
            res.status(400).json(err)
        }
    },
    deleteUser: async function (req, res, next) {
        try {

            if (req.user._id !== req.params.id && req.user.role !== 'admin') {
                res.status(402).json({ error: 'Unauthorized' });

            }
            await User.deleteOne({ _id: req.params.id })
            res.status(204).json({ message: 'Brand successfully deleted!' })
        } catch (error) {
            res.status(400).json(error)
        }
    },

    patchUpdateUser: async function (req, res, next) {
        try {

            if (req.user._id !== req.params.id && req.user.role !== 'admin') {
                res.status(402).json({ error: 'Unauthorized' });

            }
            let user = await User.findById(req.params.id)
            Object.assign(user, req.body)
            await user.save();
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json(e)
        }
    },
}