const mongoose = require('mongoose');
const { Schema } = mongoose;
const presetSchema = new Schema({
    name: String,
    user: { type: 'ObjectId', ref: 'user' },
    amp: { type: 'ObjectId', ref: 'Amplifier' },
    musicId: String,
    musicTitle: String,
    settings: {
        masterVolume: Number,
        bass: Number,
        gain: Number,
        presence: Number,
        treble: Number,
        middle: Number,
    },
});
const Preset = mongoose.model('Preset', presetSchema);
module.exports = Preset;