const WeightTracking = require('../model/WeightTracking'); // Import the WeightTracking model

// Function to add a weight tracking entry
const addWeightTracking = async (userId, weightData) => {
    try {
        const weightTrackingEntry = new WeightTracking({
            user: userId,
            date: weightData.date,
            weight: weightData.weight,
        });
        return await weightTrackingEntry.save(); // Save and return the new entry
    } catch (error) {
        throw new Error(`Failed to add weight tracking entry: ${error.message}`);
    }
};

// Function to get all weight tracking entries for a user
const getWeightTrackingByUserId = async (userId) => {
    try {
        return await WeightTracking.find({ user: userId }).sort({ date: -1 }); // Return entries sorted by date
    } catch (error) {
        throw new Error(`Failed to get weight tracking entries: ${error.message}`);
    }
};

// Function to update a weight tracking entry by ID
const updateWeightTracking = async (entryId, updateData) => {
    try {
        const updatedEntry = await WeightTracking.findByIdAndUpdate(entryId, updateData, { new: true });
        if (!updatedEntry) {
            throw new Error('Weight tracking entry not found');
        }
        return updatedEntry; // Return the updated entry
    } catch (error) {
        throw new Error(`Failed to update weight tracking entry: ${error.message}`);
    }
};

// Function to delete a weight tracking entry by ID
const deleteWeightTracking = async (entryId) => {
    try {
        const result = await WeightTracking.deleteOne({ _id: entryId });
        if (result.deletedCount === 0) {
            throw new Error('Weight tracking entry not found');
        }
        return { message: 'Weight tracking entry deleted successfully' }; // Success message
    } catch (error) {
        throw new Error(`Failed to delete weight tracking entry: ${error.message}`);
    }
};

module.exports = {
    addWeightTracking,
    getWeightTrackingByUserId,
    updateWeightTracking,
    deleteWeightTracking,
};
