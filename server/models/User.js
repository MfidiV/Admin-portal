// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  idNumber:{type:String, required: true},
  email: { type: String, required: true },
  age: { type: String, required: true }
  // image: { type: String, required: false }, 
});

module.exports = mongoose.model("User", userSchema);
