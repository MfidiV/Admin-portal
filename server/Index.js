const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const authRoutes = require('./routes/auth');
const userRoutes = require("./routes/userRoutes");
 const adminRoutes = require('./routes/adminRoutes');
 const path = require('path'); // Import the path module


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/CareerHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes); // Use authRoutes for authentication
app.use("/api/users", userRoutes);


app.use('/admin', adminRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something broke!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
