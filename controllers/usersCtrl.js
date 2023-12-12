const User = require("../models/User");

module.exports = {
    getUserName: async function (req,res,next){
        try {
            const user = await User.findOne({username: req.params.username})
            res.status(200).json(user)
        } catch (err) {
            return next(err)
        }
    },
    postCreateUser: async function(req,res,next){
        try {
            const {username,email, password} = req.body; 
            await User.create({
                username: username, 
                email: email, 
                password: password
            })
            // const user = await db.collection("users").insertOne()
            res.status(200).json(username)
        } catch (error) {
            return next(error)      

        }
    },
    getAllUsers: async function(req,res,next){
        try {
            const user =  await User.find()
            res.statut(200).json(user)
        } catch (error) {
            return next(error)
        }
    }
}