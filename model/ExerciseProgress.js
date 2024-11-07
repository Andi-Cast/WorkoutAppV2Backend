const mongoose = require('mongoose');

const exerciseProgressSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, // Reference to User model
    exerciseName: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true 
    },
    reps: { 
        type: Number, 
        required: true 
    }
});

module.exports = mongoose.model('ExerciseProgress', exerciseProgressSchema);
