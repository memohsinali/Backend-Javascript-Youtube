import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running  on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!", error);
  });
