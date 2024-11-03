const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    exercises: [{
        name: { 
            type: String, 
            required: true 
        },
        sets: [{
            weight: { 
                type: Number, 
                required: true 
            },
            reps: { 
                type: Number, 
                required: true 
            }
        }]
    }],
    notes: { 
        type: String 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    } // Reference to User model
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
