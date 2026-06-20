import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import personRoutes from "./routes/personRoute.js";
import ConnectionDB from "./db/dbConfig.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
await ConnectionDB();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api", personRoutes);

// err handler
app.use((err, req, res, next) => {
  res.json({
    message: "There was an server Error",
    status: 500,
  });
});

app.listen(PORT, () => {
  console.log(`The App is Running on PORT ${PORT}`);
});
