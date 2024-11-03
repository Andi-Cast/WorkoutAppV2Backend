const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    }, 
    weight: { 
        type: Number
    },
    email: {
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    workouts: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Workout' 
    }]
});

module.exports = mongoose.model('User', userSchema);