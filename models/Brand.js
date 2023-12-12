const mongoose = require('mongoose');
const { Schema } = mongoose;
const brandSchema = new Schema({
    name: {type: String, required: true, unique: true},
    logo: {type: String},
});
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;