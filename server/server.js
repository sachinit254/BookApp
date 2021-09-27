import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./router/userRoutes.js";
import bookRoutes from "./router/bookRoutes.js"
dotenv.config();
connectDB();

const app = express();

// to accept json data
app.use(express.json());

app.use("/users", userRoutes);
app.use("/books", bookRoutes);

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server running at port ${PORT}`));
