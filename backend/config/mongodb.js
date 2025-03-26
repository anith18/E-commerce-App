import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const mongoURI = process.env.MONGODB_URL; // Use environment variable for security

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;