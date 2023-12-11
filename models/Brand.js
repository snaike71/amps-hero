const mongoose = require('mongoose');
const { Schema } = mongoose;
const brandSchema = new Schema({
    name: String,
    logo: String,
});
const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;