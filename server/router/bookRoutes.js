import express from "express";
import {
  getBooks,
  getUserBooks,
  getBookById,
  CreateBook,
  DeleteBook,
  UpdateBook,
  filterBooks,
} from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/createBook", protect, CreateBook);
router.put("/:id", protect, UpdateBook);
router.delete("/:id", protect, DeleteBook);
router.get("/userBooks", protect, getUserBooks);
router.post("/filterBooks", filterBooks);

export default router;
