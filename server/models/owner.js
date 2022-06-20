const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the owner object
const OwnerSchema = new Schema({
    name: String,
    about: String,
    photo: String
});

module.exports = mongoose.model("Owner", OwnerSchema);