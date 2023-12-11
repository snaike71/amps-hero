const User = require("../models/User");

const getUsersPath = "/";
const getUserNamePath = "/profile/:name";
const getCreateUser = "/create";
const postCreateUserPath = "/";
const getAllUsersPath = "/all";
module.exports = {
    getUsersPath: getUsersPath,
    getUserNamePath: getUserNamePath,
    getCreateUserPath: getCreateUser,
    postCreateUserPath: postCreateUserPath,
    getAllUsersPath: getAllUsersPath,
    getUsers: async function (req,res,next){
        try {
         res.send('respond with a resource');   
        } catch (error) {
            return next(err)
        }
    },
    getUserName: async function (req,res,next){
        try {
            res.render("users/userName",{name: req.params.name})
        } catch (err) {
            return next(err)
        }
    },
    getCreateUser: async function (req,res,next){
        try {
            res.render("users/form")
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
            res.redirect("/users/profile/" + username)
        } catch (error) {
            if(error.code===11000){
                throw new Error("duplicated key")
            }
            return next(error)         
        }
    },
    getAllUsers: async function(req,res,next){
        try {
            const user =  await User.find()
            res.render("users/userList",{users: user})
        } catch (error) {
            return next(error)
        }
    }
}