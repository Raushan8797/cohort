import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDB =  async ()=> {
    await mongoose.connect(process.env.MONG_URI)
    console.log("mongoDB connected succesfully");
    
}