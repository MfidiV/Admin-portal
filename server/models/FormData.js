// FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    age: Number,
    address: String
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
