const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://luxe-gates-ckyy.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Authentication Routes
app.use("/api/auth", authRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Luxe Gates Backend is Running!");
});

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Luxe Gates Backend Running Successfully",
    version: "1.0.0",
  });
});

// Start Server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  try {
    const connection = await db.getConnection();

    console.log("✅ Connected to MySQL Database");

    connection.release();
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
  }
});