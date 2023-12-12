
const postRegisterPath = "/register"
const postLoginPath = "/login"
const jwt = require('jsonwebtoken');
const User = require("../models/User");
module.exports = {
    postRegisterPath: postRegisterPath,
    postLoginPath: postLoginPath,
    postRegister: async function (req, res, next) {
        try {
            User.register(
                new User({
                    email: req.body.email,
                    username: req.body.username,
                    role: req.body.role,
                }), req.body.password, function (err, user) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(user);
                    }
                }
            );
        } catch (error) {

        }
    },
    postLogin: async function (req, res, next) {
        try {
            const { user } = await User.authenticate()(req.body.username, req.body.password);
            if (user) {
                const payload = {
                    id: user.id,
                    expire: Date.now() + 1000 * 60 * 60 * 24 * 7
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET)

                res.json({ token: token });
            } else {
                res.json({ error: 'Can\'t connect!' });
            }
        } catch (error) {

        }
    },

}