import Book from "../models/bookModel.js";

export const uploadBook = async (req, res) => {
    try {
        const data = req.body;
        const newBook = new Book(data);
        const result = await newBook.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAllBooks = async (req, res) => {
    try {
        let query = {};
        if (req.query?.category) {
            query = { category: req.query.category };
        }
        const result = await Book.find(query);
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findById(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await Book.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndDelete(id);
        if (result) {
            res.status(200).send({ message: "Xóa sách thành công", result });
        } else {
            res.status(404).send({
                message: "Không tìm thấy sách với ID đã cho",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Đã xảy ra lỗi",
            error: error.message,
        });
    }
};
