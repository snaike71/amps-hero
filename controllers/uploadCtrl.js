module.exports = {
    upload: function(req,res,next){
        try {
            res.json({file: req.file})
        } catch (error) {
            res.status(400).json(error)
        }

    }
}