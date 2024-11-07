const ExerciseProgress = require('../model/ExerciseProgress'); // Import the ExerciseProgress model

// Function to log exercise progress
const logExerciseProgress = async (userId, exerciseData) => {
    try {
        const progressEntry = new ExerciseProgress({
            user: userId,
            exerciseName: exerciseData.exerciseName,
            date: exerciseData.date,
            weight: exerciseData.weight,
            reps: exerciseData.reps,
        });
        return await progressEntry.save(); // Save and return the new entry
    } catch (error) {
        throw new Error(`Failed to log exercise progress: ${error.message}`);
    }
};

// Function to get all progress entries for a user
const getExerciseProgressByUserId = async (userId) => {
    try {
        return await ExerciseProgress.find({ user: userId }).sort({ date: -1 }); // Return entries sorted by date
    } catch (error) {
        throw new Error(`Failed to get exercise progress entries: ${error.message}`);
    }
};

// Function to update an exercise progress entry by ID
const updateExerciseProgress = async (entryId, updateData) => {
    try {
        const updatedEntry = await ExerciseProgress.findByIdAndUpdate(entryId, updateData, { new: true });
        if (!updatedEntry) {
            throw new Error('Exercise progress entry not found');
        }
        return updatedEntry; // Return the updated entry
    } catch (error) {
        throw new Error(`Failed to update exercise progress entry: ${error.message}`);
    }
};

// Function to delete an exercise progress entry by ID
const deleteExerciseProgress = async (entryId) => {
    try {
        const result = await ExerciseProgress.deleteOne({ _id: entryId });
        if (result.deletedCount === 0) {
            throw new Error('Exercise progress entry not found');
        }
        return { message: 'Exercise progress entry deleted successfully' }; 
    } catch (error) {
        throw new Error(`Failed to delete exercise progress entry: ${error.message}`);
    }
};

module.exports = {
    logExerciseProgress,
    getExerciseProgressByUserId,
    updateExerciseProgress,
    deleteExerciseProgress,
};
