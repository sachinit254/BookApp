import express from "express";
import {
  authUser,
  getPasswordResetLink,
  getUserById,
  registerUser,
  resetPassword,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/:id", protect, getUserById);
router.post("/register", registerUser);
router.post("/login", authUser);
router.put("/profile", protect, updateUserProfile);
router.post("/forgot-password", getPasswordResetLink);
router.post("/reset-password/:userId/:token", resetPassword);

export default router;
