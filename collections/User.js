const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    username: String,
    email: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
