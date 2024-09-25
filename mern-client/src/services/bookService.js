import axios from "../config/axios"; 


// Hàm này sẽ gửi request lên server để tải sách lên
export const uploadBook = async (bookData) => {
    try {
        const response = await axios.post("/books/upload-book", bookData,);
        return response.data;
    } catch (error) {
        console.error("Failed to upload book:", error);
        throw error;
    }
};

// Hàm này sẽ gửi request lên server để lấy ra tất cả sách
export const fetchAllBooks = async () => {
    try {
        const response = await axios.get("/books/all-books");
        return response.data.slice(0, 8);
    } catch (error) {
        console.error("Failed to fetch best seller books:", error);
        return [];
    }
};

// Hàm này sẽ gửi request lên server để cập nhật thông tin sách dựa trên ID
export const updateBookById = async (id, bookData) => {
    try {
        const response = await axios.put(`/books/book/${id}`, bookData,);
        return response.data;
    } catch (error) {
        console.error("Failed to update book:", error);
        throw error;
    }
};

//Lấy Sách Theo ID
export const fetchBookById = async (id) => {
    try {
        const response = await axios.get(`/books/book/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch book by id:", error);
        return {};
    }
};


// Hàm này sẽ gửi request lên server để xóa sách dựa trên ID
export const deleteBookById = async (id) => {
    try {
        const response = await axios.delete(`/books/book/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to delete book:", error);
        throw error;
    }
};