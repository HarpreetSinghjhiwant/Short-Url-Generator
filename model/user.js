const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('user', userSchema);