const User = require('../models/User');

const createUser = async (userData) => {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
};

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

module.exports = {
    createUser,
    getAllUsers,
}