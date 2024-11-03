const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightTrackingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }, // Reference to User model
    date: { 
        type: Date, 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true
    }
});

module.exports = mongoose.model('WeightTracking', weightTrackingSchema);
