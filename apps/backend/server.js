// apps/backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // It's good practice to keep this

// --- DATABASE CONNECTION IS DISABLED FOR TESTING ---
// const connectDB = require('./config/db');
// connectDB();
// ---------------------------------------------------

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// A simple test route to confirm connection
app.get('/api/test', (req, res) => {
  console.log("✅ /api/test route was hit successfully!"); // Add a log for confirmation
  res.json({ message: 'Hello from the backend! 👋' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running for testing on port ${PORT}`);
});