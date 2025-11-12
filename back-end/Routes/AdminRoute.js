import express from "express"
import { PostMessage,getEmail,getEmailId,deleteEmail } from "../Controllers/AdminController.js";
const router = express.Router();
router.post("/send-message",PostMessage),
router.get("/emails", getEmail)
router.get("/emails/:id", getEmailId)
router.delete("/emails/:id", deleteEmail)
export default router;