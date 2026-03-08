import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/db/connectDB.js";
import authRoutes from "./src/routes/auth.routes.js";
import leaveRoutes from "./src/routes/leave.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/leaves", leaveRoutes);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome to the backend API");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
