const getIndexPath = "/";

module.exports = {
    index: async function (req, res, next) {
        try {
            res.render('index', { title: 'Express' });
        } catch (error) {
            return next(err)
        }
    }
}