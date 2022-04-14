import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./router/userRoutes.js";
import bookRoutes from "./router/bookRoutes.js";
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

// for deployment
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running at port ${PORT}`));
