import mongoose from "mongoose";

export const Db_connection = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const DB_URL = process.env.DB_URL;

  if (!DB_URL) {
    throw new Error("MongoDB URL not found in environment variables!");
  }

  try {
    await mongoose.connect(DB_URL, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.log("Mongo DB Error:", error.message);
    throw error;
  }
};
