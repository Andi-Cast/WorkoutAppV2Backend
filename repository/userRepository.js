const User = require('../model/User');
const Workout = require('../model/Workout'); // Import the Workout model


const getAllUsers = async () => {
    return await User.find();
};

const addUser = async (user) => {
    return await User.create(user);
}

const updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new : true });
}

const getUserById =  async (userId) => {
    return await User.findById(userId);
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email: email});
};

const deleteUserById = async (userId) => {
    return await User.deleteOne({ _id: userId })
};

const addWorkout = async (userId, workoutData) => {
    try {
        // Create a new workout instance
        const workout = new Workout(workoutData);
        await workout.save(); // Save the workout to the database

        // Find the user and update their workouts array
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        user.workouts.push(workout._id); // Push the workout ID to the user's workouts array
        await user.save(); // Save the updated user

        return workout; // Return the added workout
    } catch (error) {
        throw new Error(`Failed to add workout: ${error.message}`);
    }
};

const deleteWorkout = async (userId, workoutId) => {
    try {
        // Find the workout by ID and delete it
        const workout = await Workout.findById(workoutId);
        if (!workout) {
            throw new Error('Workout not found');
        }

        await Workout.deleteOne({ _id: workoutId }); // Delete the workout

        // Find the user and remove the workout ID from their workouts array
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        user.workouts = user.workouts.filter(id => id.toString() !== workoutId); // Remove the workout ID
        await user.save(); // Save the updated user

        return workout; // Return the deleted workout (or you could just return a success message)
    } catch (error) {
        throw new Error(`Failed to delete workout: ${error.message}`);
    }
};

const updateWorkout = async (workoutId, updateData) => {
    try {
        // Find the workout by ID and update it
        const updatedWorkout = await Workout.findByIdAndUpdate(workoutId, updateData, { new: true });
        
        if (!updatedWorkout) {
            throw new Error('Workout not found');
        }

        return updatedWorkout; // Return the updated workout
    } catch (error) {
        throw new Error(`Failed to update workout: ${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    getUserById,
    getUserByEmail,
    deleteUserById,
    addWorkout,
    deleteWorkout,
    updateWorkout, 
};