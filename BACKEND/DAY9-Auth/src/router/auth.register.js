import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../module/user.module.js";
import { authenticate } from "../middleware/auth.middleware.js";
import dotenv from "dotenv"
dotenv.config()
import bcrypt from "bcryptjs"

const router = express.Router();
router.get("/Auth", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10) // bcrypt help to convert password to hash value
  });

  const token = jwt.sign(
    {
      id: user._id,
    }, process.env.JWT_SECRET)
  
  res.status(200).json({
    message: "User created successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

router.get("/auth/me", authenticate  ,async (req,res)=>{
// {  const authHeader = req.headers.authorization;
//   const data = jwt.decode(authHeader) // this decode jwt function will  give the ID of user whode troken is given 

//   const user = await userModel.findById(data.id) // this will to find the user detail with help of the id which we got with jwt.decode

//     res.status(200).json({
//     message: "Authorization header received",
//     authHeader,
//     data,
//     user

//   });
  
//   console.log(data);
//    console.log(user);}
  
console.log(req.user);

  res.status(200).json({
    data:{
      user:req.user
    }
  })
})

export default router;
