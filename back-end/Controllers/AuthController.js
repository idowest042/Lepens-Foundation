import bcrypt from "bcryptjs";
import user from "../model/userModel.js"
import { sendVerificationEmail } from "../Config/nodemailer.js";
import crypto from "crypto";
import { generateToken } from "../Config/utilis.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
      verificationCode,
      verificationCodeExpires: Date.now() + 10 * 60 * 1000 // 10 minutes
    });

    // Send the code via email
    await sendVerificationEmail(email, verificationCode);

    return res.status(201).json({
      message: "Signup successful! Check your email for the verification code.",
      userId: newUser._id
    });

  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const verifyUser = async (req, res) => {
  try {
    const { userId, code } = req.body;

    const foundUser = await user.findById(userId);
    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }

    if (foundUser.isVerified) {
      return res.status(400).json({ message: "User already verified" });
    }
    console.log("User code in DB:", foundUser.verificationCode);
console.log("Code from request:", code);
console.log("Expiry in DB:", foundUser.verificationCodeExpires);
console.log("Current time:", Date.now());

    if (
      foundUser.verificationCode !== code ||
      foundUser.verificationCodeExpires < Date.now()
    ) {
      return res.status(400).json({ message: "Invalid or expired verification code" });
    }

    // Mark as verified
    foundUser.isVerified = true;
    foundUser.verificationCode = undefined;
    foundUser.verificationCodeExpires = undefined;
    await foundUser.save();

    // ✅ Now generate token here
    const token = generateToken(foundUser._id, res);

    return res.status(200).json({
      message: "Account verified successfully!",
      token,
      user: {
        id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email
      }
    });

  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};