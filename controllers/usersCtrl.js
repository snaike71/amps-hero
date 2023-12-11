
const getUsersPath = "/";
const getUserNamePath = "/:name";
module.exports = {
    getUsersPath: getUsersPath,
    getUserNamePath: getUserNamePath,
    getUsers: async function (req,res,next){
        try {
         res.send('respond with a resource');   
        } catch (error) {
            return next(err)
        }
    },
    getUserName: async function (req,res,next){
        try {
            res.render("userName",{name: req.params.name})
        } catch (err) {
            return next(err)
        }
    }
}