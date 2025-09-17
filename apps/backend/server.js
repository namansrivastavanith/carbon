// apps/backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// --- DATABASE CONNECTION IS DISABLED ---
// const connectDB = require('./config/db');
// connectDB();
// -------------------------------------

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Your test API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected! 👋' });
});

// You can start adding more API routes here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT} (Database connection is OFF)`);
});