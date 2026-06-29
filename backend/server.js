const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");
const taskRoutes = require("./routes/taskRoutes");

const Task = require("./models/Task");

console.log("Task Model Loaded");

console.log("Loading DB file...");
const connectDB = require("./config/db");
console.log("DB file loaded successfully");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhM2QxYzJhZjEyYjFiYjRmNzVkMGVmZSIsImlhdCI6MTc4MjM5MjY2NCwiZXhwIjoxNzgyOTk3NDY0fQ.JaEoc8iRDGjJ67mizo_m3lREYZPGat6Jgzga6WRg0ls