const mongoose = require('mongoose');
require('dotenv').config;
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://atul9:3FgR5vsJPKqM0r@ecommerceshapner.qo5vpu.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB database!');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;

