import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDb is connected");
  } catch (error) {
    console.log("Error while connecting with MongoDb",error);
    
    
  }
};

export default connectDB;
