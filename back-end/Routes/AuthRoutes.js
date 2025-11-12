import express from "express"
import { signup, verifyUser,login, logout, checkAuth } from "../Controllers/AuthController.js";
import {protect} from "../Middleware/AuthMiddleware.js"
const router = express.Router();
router.post("/signup", signup)
router.post("/verify", verifyUser);
router.post("/login", login)
router.post("/logout", logout)
router.get("/check-auth", protect, checkAuth)
export default router;