import Book from "../model/bookModel.js";
import asyncHandler from "express-async-handler";

// @desc     Get all books
// @router   GET /books
// @access   Public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// @desc      Get logged in user books
// @route     GET /books/userBooks
// @access    Private
const getUserBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user._id });
  res.json(books);
});

// @desc      Fetch single Book
// @route     GET /books/:id
// @access    Public
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
  //   res.json(book);
});

// @desc       Create single Book
// @route      POST /books/createBook
// @access     Private
const CreateBook = asyncHandler(async (req, res) => {
  const { title, author, postedBy, postedFrom, pic } = req.body;

  if (!title || !author || !postedBy || !postedFrom) {
    res.status(400);
    throw new Error("Please Fill all the fields");
    return;
  } else {
    const book = new Book({
      user: req.user._id,
      title,
      author,
      postedBy,
      postedFrom,
      pic,
    });

    const createdBook = await book.save();

    res.status(201).json(createdBook);
  }
});

// @desc       Delete a single book
// @route      GET /books/:id
// @access     Private
const DeleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book._id.toString() !== req.params.id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (book) {
    await book.remove();
    res.json({ message: "Book Removed" });
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @desc      Update a book
// @route     PUT /books/:id
// @access    Private
const UpdateBook = asyncHandler(async (req, res) => {
  const { title, author } = req.body;

  const book = await Book.findById(req.params.id);

  if (book._id.toString() !== req.params.id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (book) {
    book.title = title;
    book.author = author;
    // book.pic = pic;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

export {
  getBooks,
  getBookById,
  getUserBooks,
  CreateBook,
  UpdateBook,
  DeleteBook,
};
