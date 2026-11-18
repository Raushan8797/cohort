import { Router } from "express";
import { create, getUser, refreshToken } from "../controller/controller.js";
const router = Router();

router.post("/register", create);

router.get("/me", getUser);

router.post("/refresh", refreshToken);

export default router;
