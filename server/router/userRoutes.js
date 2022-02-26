import express from "express";
import {
  authUser,
  getUserById,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @route        GET /users/:id
router.get("/:id",protect, getUserById);
router.post("/register", registerUser);
router.post("/login", authUser);
router.put("/profile", protect, updateUserProfile);

export default router;
