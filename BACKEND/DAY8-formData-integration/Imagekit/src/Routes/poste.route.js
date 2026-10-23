import express, { Router } from "express";
import { upload } from "../Config/multr.js";
import { createPost, getAllPost } from "../Controller/post.controller.js";
const router = express.Router()

router.post("/create",upload.single('image'), createPost)

router.get("/getAllPost", getAllPost)
export default  router;
