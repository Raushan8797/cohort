import postModel from "../Models/post.model.js";
import { sendFiles } from "../service/storage.service.js";

export const createPost = async (req, res) => {
  try {
   let {caption} = req.body
   const file = req.file
   console.log(file);
   

   if (!caption || !file) return res.status(400).json({
    success:false,
    message:"field  are required"
   })

   const uploadImage = await sendFiles(file.buffer, file.originalname)

   console.log(uploadImage);

   

   const post = await postModel.create({
    caption,
    image:uploadImage.url
   })
   return res.status(201).json({
    success:true,
    message:"poste created successfully ",
    post
   })
  
  } catch (error) {
    console.log("error in poste controler", error);
    
  }
};

export const getAllPost = async (req,res)=>{
  const posts = await postModel.find()

   return res.status(200).json({
    success:true,
    message:"poste fetched successfully ",
    posts
   })
}
