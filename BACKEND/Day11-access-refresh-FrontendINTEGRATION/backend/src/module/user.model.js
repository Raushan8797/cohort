import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3, "Name must be at least 3 characters long"]
    },
    email:{
        type:String,
        required:true,
        // unique:true,
       
    },
     passwordHash:{
        type:String,
        required:true,
        minLength:[8, "Password must be at least 8 characters long"]
    },refreshToken:{
        type:String,
        default:""
    }

})

const userModel= mongoose.model("user", userSchema);
export default userModel;