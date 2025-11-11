import express from "express"
import { signup, verifyUser } from "../Controllers/AuthController.js";
const router = express.Router();
router.post("/signup", signup)
router.post("/verify", verifyUser);
export default router;