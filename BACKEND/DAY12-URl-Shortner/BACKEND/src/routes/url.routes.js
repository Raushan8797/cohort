import express from "express";
import { urlController, allUrl, deleteUrl } from "../controller/url.controller.js";

const router = express.Router();

// POST /API/url
router.post("/", urlController) 

router.get("/", allUrl)

router.delete("/:id", deleteUrl)

export default router;
