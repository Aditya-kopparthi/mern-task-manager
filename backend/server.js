const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // ✅

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB ✅
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
