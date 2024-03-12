const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String
    },
    birthdate: {
        type: String
    },
    role: {
        type: String,
        enum: ['full', 'partial'], // Role can be either 'full' or 'partial'
        default: 'full' // Default role to 'full'
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
