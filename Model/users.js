const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    sex: String,
    address: String,
    image: String,
});

const user = mongoose.model('user', userSchema);

module.exports = user;