import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
