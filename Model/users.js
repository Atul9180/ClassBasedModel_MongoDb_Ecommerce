const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;