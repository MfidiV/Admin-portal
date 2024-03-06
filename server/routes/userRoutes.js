// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { name, surname, idNumber,email, age } = req.body;
    const newUser = new User({ name,surname,idNumber, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
});

// Update an existing user
router.put("/:id", async (req, res) => {
  try {
    const { name, surname, email, age, image } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, surname, email, age, image }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
});

// Delete an existing user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
});

module.exports = router;
