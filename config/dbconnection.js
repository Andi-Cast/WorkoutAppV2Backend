const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to MongoDB Atlas successfully!");

    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;