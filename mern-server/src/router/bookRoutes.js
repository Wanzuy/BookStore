// mern-server/routes/bookRoutes.js
import express from "express";
import {
    uploadBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/upload-book", uploadBook);
router.get("/all-books", getAllBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
